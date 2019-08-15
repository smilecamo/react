/*
 * @Author: Yang
 * @Date: 2019-08-09 15:08:09
 * @Last Modified by: Yang
 * @Last Modified time: 2019-08-15 15:14:51
 */

import App, { Container } from 'next/app';
import 'antd/dist/antd.css';
import Layout from '../components/Layout';
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
    const { Component, pageProps } = this.props;
    return (
      <Container>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </Container>
    );
  }
}
export default MyApp;
