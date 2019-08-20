// next.config.js
// const withSass = require('@zeit/next-sass');
// module.exports = withSass({
//   /* config options here */
//   cssModules: true
// });
const config = require('./config.js');
const withCSS = require('@zeit/next-css');

if (typeof require !== 'undefined') {
  require.extensions['.css'] = file => {};
}
// gitHub验证地址
const GITHUB_OAUTH_URL = 'https://github.com/login/oauth/authorize';
const SCOPE = 'user';
module.exports = withCSS({
  /* config options here */
  publicRuntimeConfig: {
    GITHUB_OAUTH_URL,
    OAUTH_URL: `${GITHUB_OAUTH_URL}?client_id=${config.github.client_id}&scope=${SCOPE}`
  }
});
