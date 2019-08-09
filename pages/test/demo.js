/*
 * @Author: Yang 
 * @Date: 2019-08-09 15:07:48 
 * @Last Modified by: Yang
 * @Last Modified time: 2019-08-09 15:08:12
 */


import { Button } from 'antd';
import { withRouter } from 'next/router';
const Test = ({router}) => {

  return (
    <Button type="default">
      主页{router.query.id}
    </Button>
  );
};
export default withRouter(Test);
