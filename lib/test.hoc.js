export default Comp => {
  function TestHocComp({ Component, pageProps, ...rest }) {
    console.log('Component' + Component, 'pageProps' + pageProps);
    return <Comp Component={Component} pageProps={pageProps} {...rest} />;
  }
  // 复制getInitialProps方法
  TestHocComp.getInitialProps = Comp.getInitialProps;
  return TestHocComp;
};
