const axios = require('axios');
const config = require('../config');
const { client_id, client_secret, require_token_url } = config.github;
module.exports = server => {
  server.use(async (ctx, next) => {
    if (ctx.path === '/auth') {
      const code = ctx.query.code;
      if (!code) {
        ctx.body = 'code no ';
        return;
      }
      const result = await axios({
        method: 'POST',
        url: require_token_url,
        data: {
          client_id,
          client_secret,
          code
        },
        header: {
          Accept: 'application/json'
        }
      });
      if (result.status === 200 && (result.data && !result.data.error)) {
        ctx.session.githubAuth = result.data;
        ctx.redirect('/');
      } else {
        ctx.body = `验证获取token失败 ${result.message}`;
      }
    } else {
      await next();
    }
  });
};
