import React from 'react';
import createStore from '../store/store';
const isSever = typeof window === 'undefined';
const __NEXT__REDUX__STORE = '__NEXT__REDUX__STORE';
function getOrCreateStore(initialState) {
  if (isSever) {
    return createStore(initialState);
  }
  if (!window[__NEXT__REDUX__STORE]) {
    window[__NEXT__REDUX__STORE] = createStore(initialState);
  }
  return window[__NEXT__REDUX__STORE];
}
export default Comp => {
  class WithReduxApp extends React.Component {
    constructor(props) {
      super(props);
      this.reduxStore = getOrCreateStore(props.initialReduxState);
    }
    render() {
      const { Component, pageProps, ...rest } = this.props
      console.log('Component' + Component, 'pageProps' + pageProps);
      return (
        <Comp
          Component={Component}
          pageProps={pageProps}
          {...rest}
          reduxStore={this.reduxStore}
        />
      );
    }
  }

  // 复制getInitialProps方法
  WithReduxApp.getInitialProps = async ctx => {
    let appProps = {};
    if (typeof Comp.getInitialProps === 'function') {
      appProps = await Comp.getInitialProps(ctx);
    }
    const reduxStore = getOrCreateStore();
    return {
      ...appProps,
      initialReduxState: reduxStore.getState()
    };
  };
  return WithReduxApp;
};
