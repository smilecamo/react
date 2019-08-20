const Koa = require('koa');
const Router = require('koa-router');
const next = require('next');
const session = require('koa-session');
const Redis = require('ioredis');
const auth = require('./server/auth')
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
    maxAge: 100*1000,
    // 链接redis数据库
    store: new RedisSessionStore(redis)
  };
  // cookie
  server.use(async (ctx, next) => {
    await handle(ctx.req, ctx.res);
    // if (!ctx.cookies.get('id')) {
    //   // 设置cookie
    //   ctx.cookies.set('id', 'this is setCookie');
    // }
    ctx.respond = false;
    await next();
    // 获取cookie
    // console.log(ctx.cookies.get('id'));
  });
  server.use(session(SESSION_CONFIG, server));
  // 配置处理githubAuth登录
  auth(server)
  // router.get('/set/user', async ctx => {
  //   ctx.session.user = {
  //     name: 'names',
  //     age: 18
  //   };
  //   ctx.body = 'set session is ok';
  // });
  // router.get('/del/user', async ctx => {
  //   ctx.session=null
  //   ctx.body = 'set session is ok';
  // });
  server.use(router.routes());
  server.listen(8080, () => {
    console.log('server is open 8080');
  });
});
