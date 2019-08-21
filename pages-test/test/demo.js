/*
 * @Author: Yang
 * @Date: 2019-08-09 15:07:48
 * @Last Modified by: Yang
 * @Last Modified time: 2019-08-15 16:54:32
 */

import { Button } from 'antd';
import Link from 'next/link';
import { withRouter } from 'next/router';
import styled from 'styled-components';
const Title = styled.h1`
  font-size: 24px;
  color: red;
`;
const Test = ({ router, name, date }) => {
  return (
    <>
      <Title>this is title{date}</Title>
      <Link href="/">
        <Button type="default">
          主页{router.query.id}
          {name}
        </Button>
      </Link>
      <Link href="#kkkk">
        <Button type="default">hash路由</Button>
      </Link>
    </>
  );
};
// 获取数据
Test.getInitialProps = async ctx => {
  const moment = await import('moment');
  const promise = new Promise(resolve => {
    setTimeout(() => {
      resolve({
        name: 'Yang',
        date: moment.default(Date.now() - 60 * 1000).fromNow()
      });
    }, 1000);
  });
  return await promise;
};

export default withRouter(Test);
