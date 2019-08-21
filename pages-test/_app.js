/*
 * @Author: Yang
 * @Date: 2019-08-09 15:08:09
 * @Last Modified by: Yang
 * @Last Modified time: 2019-08-20 10:28:43
 */

import App, { Container } from 'next/app';
import { Provider } from 'react-redux';
import 'antd/dist/antd.css';
import Layout from '../components-test/Layout';

import withReduxStore from '../lib/with-redux';
class MyApp extends App {
  // Component 就是界面
  // getInitialProps 页面每次切换时都会被调用
  static async getInitialProps({ Component, ctx }) {
    let pageProps;
    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }
    return { pageProps };
  }

  render() {
    // Component 就是界面
    const { Component, pageProps, reduxStore } = this.props;
    return (
      <Container>
        <Provider store={reduxStore}>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </Provider>
      </Container>
    );
  }
}
export default withReduxStore(MyApp);
