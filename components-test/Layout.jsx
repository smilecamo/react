import { Button } from 'antd';
import Link from 'next/link';
const Layout = ({ children }) => {
  return (
    <>
      <Link href="/">
        <Button type="default">Layout主页</Button>
      </Link>
      <Link href="#kkkk">
        <Button type="default">Layout hash路由</Button>
      </Link>
      {children}
    </>
  );
};
export default Layout;
