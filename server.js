const Koa = require('koa');
const Router = require('koa-router');
const next = require('next');
const session = require('koa-session');
const Redis = require('ioredis');
const auth = require('./server/auth');
const dev = process.env.NODE_ENV !== 'production';
const RedisSessionStore = require('./server/session-store');
const app = next({ dev });
const server = new Koa();
const router = new Router();
const handle = app.getRequestHandler();
// 创建redis
const redis = new Redis({
  port: 6378, // Redis port
  host: '127.0.0.1',
  password: '123456'
});
app.prepare().then(() => {
  server.keys = ['this is server keys'];
  // koa-session配置项
  const SESSION_CONFIG = {
    // 前缀
    key: 'sessionKey',
    // 过期时间
    maxAge: 10000 * 1000,
    // 链接redis数据库
    store: new RedisSessionStore(redis)
  };
  server.use(session(SESSION_CONFIG, server));
  // 配置处理githubAuth登录
  auth(server);
  // cookie
  server.use(async (ctx, next) => {
    ctx.req.session = ctx.session;
    await handle(ctx.req, ctx.res);
    ctx.respond = false;
  });
  router.get('/user/info', async ctx => {
    const userInfo = ctx.session.userInfo;
    console.log('=========/user/info==');
    if (!userInfo) {
      ctx.status = 401;
      ctx.body = 'Need Login';
      console.log('Need Login');
    } else {
      ctx.body = userInfo;
      ctx.set('Content-Type', 'application/json');
      console.log('Content-Type', 'application/json');
    }
  });
  server.use(router.routes());
  server.listen(8080, () => {
    console.log('server is open 8080');
  });
});
