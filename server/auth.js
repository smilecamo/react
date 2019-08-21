const axios = require('axios');
const config = require('../config');
const { client_id, client_secret, require_token_url } = config.github;
module.exports = server => {
  server.use(async (ctx, next) => {
    if (ctx.path === '/auth') {
      const code = ctx.query.code;
      console.log('code ' + code);
      if (!code) {
        ctx.body = 'code no ';
        return;
      }
      const res = await axios({
        method: 'POST',
        url: require_token_url,
        data: {
          client_id,
          client_secret,
          code
        },
        headers: {
          Accept: 'application/json'
        }
      });
      if (res.status === 200 && (res.data && !res.data.error)) {
        const { access_token, token_type } = res.data;
        ctx.session.githubAuth = res.data;
        const userInfoResp = await axios({
          method: 'GET',
          url: 'https://api.github.com/user',
          headers: {
            Authorization: `${token_type} ${access_token}`
          }
        });
        ctx.session.userInfo = userInfoResp.data;
        ctx.redirect('/');
      } else {
        ctx.body = `验证获取token失败 ${res.data.error}`;
      }
      // if (result.status === 200 && (result.data && !result.data.error)) {
      //   ctx.session.githubAuth = result.data;
      //   ctx.redirect('/');
      // } else {
      //   ctx.body = `验证获取token失败 ${result.data.error}`;
      // }
    } else {
      await next();
    }
  });
};
