import Router from 'next/router';
import { Button } from 'antd';
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
  return (
    <Button type="primary" onClick={Go}>
      A
    </Button>
  );
};
export default Home;
