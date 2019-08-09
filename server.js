const Koa = require('koa');
const Router = require('koa-router');
const next = require('next');

const dev = process.env.NODE_ENV !== 'production';

const app = next({ dev });
const server = new Koa();
const router = new Router();
const handle = app.getRequestHandler();

app.prepare().then(() => {
  server.use(async (ctx, next) => {
    await handle(ctx.req, ctx.res);
    ctx.respond = false;
  });
  server.listen(8080, () => {
    console.log('server is open 8080');
  });
});
