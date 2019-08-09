/*
 * @Author: Yang
 * @Date: 2019-08-09 15:07:48
 * @Last Modified by: Yang
 * @Last Modified time: 2019-08-09 15:39:22
 */

import { Button } from 'antd';
import Link from 'next/link';
import { withRouter } from 'next/router';
const Test = ({ router }) => {
  return (
    <Link href="/">
      <Button type="default">主页{router.query.id}</Button>
    </Link>
  );
};
export default withRouter(Test);
