import Router from 'next/router';
import { useEffect } from 'react';
import axios from 'axios';
import { Button } from 'antd';
import { connect } from 'react-redux';
import getCofnig from 'next/config';
const { publicRuntimeConfig } = getCofnig();
import '../static/index.css';
const Home = () => {
  function Go() {
    Router.push({
      pathname: '/test/demo',
      query: {
        id: 1
      }
    });
  }
  function GoB() {
    Router.push({
      pathname: '/test/b'
    });
  }
  // 路由切换前 history
  const handleRouteChange = url => {
    console.log('handleRouteChange: ', url);
  };
  // 路由切换完成之后 history
  const handleRouteChangeComplete = url => {
    console.log('routeChangeComplete:', url);
  };
  // history 路由切换之前
  const handleBeforeHistoryChange = url => {
    console.log('beforeHistoryChange:', url);
  };
  // hash 开始切换hash 但页面没有改变
  const handleHashChangeStart = url => {
    console.log('hashChangeStart', url);
  };
  // hash hash切换完成,页面没有改变
  const handleHashChangeComplete = url => {
    console.log('hashChangeComplete', url);
  };
  Router.events.on('routeChangeStart', handleRouteChange);
  Router.events.on('routeChangeComplete', handleRouteChangeComplete);
  Router.events.on('beforeHistoryChange', handleBeforeHistoryChange);
  Router.events.on('hashChangeStart', handleHashChangeStart);
  Router.events.on('hashChangeComplete', handleHashChangeComplete);
  useEffect(() => {
    axios({
      method:'GET',
      url:'/user/info'
    }).then(res=>{
      console.log(res);
    })
  }, []);
  return (
    <>
      <Button type="primary" onClick={Go}>
        A
      </Button>
      <Button type="primary" onClick={GoB}>
        B
      </Button>
      <a href={publicRuntimeConfig.OAUTH_URL}>GitHub登录</a>
      <style jsx>{`
        p {
          color: blue;
        }
        div {
          background: red;
        }
        @media (max-width: 600px) {
          div {
            background: blue;
          }
        }
      `}</style>
    </>
  );
};
export default connect()(Home);