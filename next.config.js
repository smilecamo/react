// next.config.js
// const withSass = require('@zeit/next-sass');
// module.exports = withSass({
//   /* config options here */
//   cssModules: true
// });

const withCSS = require('@zeit/next-css');


if(typeof require !== 'undefined'){
  require.extensions['.css']=file=>{}
}

module.exports = withCSS({
  /* config options here */
});
