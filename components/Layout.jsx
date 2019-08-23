
import { useState,useCallback } from 'react'
import { connect } from 'react-redux'
import { Layout, Avatar,Icon,Input,Tooltip, Dropdown, Menu } from 'antd'
import axios from 'axios'
import getCofnig from 'next/config';
import { withRouter} from 'next/router'
const { publicRuntimeConfig } = getCofnig();
import Container from './Container'
import { logout } from '../store/store';
const { Header, Content, Footer } = Layout

const githubIconStyle = {
  color:'white',
  fontSize:40,
  display:'block',
  paddingTop: 10,
  marginRight: 20,
}
const footerStyle={
  textAlign:'center'
}
function MyLayout ({ children, user, logout,router}){
  const [search, setSearch] = useState('')
  const handleSearchChange = useCallback((event)=>{
    setSearch(event.target.value)
  },[])
  const handleSearch = useCallback(()=>{
  },[])
  // 退出
  const handleLogout = useCallback(() => {
    logout()
  }, [logout])
  // 登录鉴权前保留地址
  const handleGoOAuth = useCallback((e) => {
    e.preventDefault()
    axios({
      method:'get',
      url: `/prepare-auth?url=${router.asPath}`
    }).then(res=>{
      if(res.status===200){
        location.href = publicRuntimeConfig.OAUTH_URL
      }else{
        console.log('prepare-auth'+res);
      }
    }).catch((err)=>{
      console.log('prepare-authErr' + err);
    })
  }, [])
  const userDropDown = (
    <Menu>
      <Menu.Item>
        <a href="javascript:void(0)" onClick={handleLogout}>
          退 出
      </a>
      </Menu.Item>
    </Menu>
  )
  return(
  <Layout>
    <Header>
        <Container render={<div className="header-inner"></div>} >
      <div className="header-left">
        <div className="logo">
              <Icon type="github" style={githubIconStyle}></Icon>
        </div>
        <div className="search">
          <Input.Search placeholder="搜索仓库"
          value={search}
          onChange={handleSearchChange}
          onSearch={handleSearch}
          ></Input.Search>
        </div>
      </div>
      <div className="header-right">
        <div className='user'>
          {
                user && user.id ? 
                  (
                    <Dropdown overlay={userDropDown}>
                      <a href="/">
                        <Avatar size="large" src={user.avatar_url} />
                      </a>
                    </Dropdown>

                  ) 
                : (
                    <Tooltip title="点击登录"><a href={publicRuntimeConfig.OAUTH_URL}
                    onClick={handleGoOAuth}
                    >
                      <Avatar size="large" icon="user" />
                    </a></Tooltip>
                )
          }
        </div>
      </div>
        </Container>
    </Header>
    <Content>
        <Container>{children}</Container>
    </Content>
      <Footer style={footerStyle}>
        <Icon type="github"></Icon>© 2019 Github, Inc
    </Footer>
    <style jsx global>{`
        #__next{
          height:100%
        }
        .ant-layout{
          height:100%
        }
        .ant-layout-header{
          padding:0
        }
        `}
    </style>
      <style jsx>{`
        .header-inner{
          display:flex;
          justify-content: space-between;
        }
        .header-left{
          display:flex;
          justify-content: space-between;
        }
        `}
      </style>
  </Layout>
  )
}

export default connect(function userState(state){
  return{
    user: state.user
  }
},function mapReducers(display){
  return{
    logout: () => display(logout())
  }
  })(withRouter(MyLayout))