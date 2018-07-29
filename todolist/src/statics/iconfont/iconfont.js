import { injectGlobal } from 'styled-components'
injectGlobal`
@font-face {font-family: "iconfont";
  src: url('./iconfont.eot?t=1532872320687'); /* IE9*/
  src: url('./iconfont.eot?t=1532872320687#iefix') format('embedded-opentype'), /* IE6-IE8 */
  url('data:application/x-font-woff;charset=utf-8;base64,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') format('woff'),
  url('./iconfont.ttf?t=1532872320687') format('truetype'), /* chrome, firefox, opera, Safari, Android, iOS 4.2+*/
  url('./iconfont.svg?t=1532872320687#iconfont') format('svg'); /* iOS 4.1- */
}

.iconfont {
  font-family:"iconfont" !important;
  font-size:16px;
  font-style:normal;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
`