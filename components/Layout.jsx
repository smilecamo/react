import Link from 'next/link'
import { useState,useCallback } from 'react'
import { Layout, Avatar,Icon,Input } from 'antd'
import getCofnig from 'next/config';
const { publicRuntimeConfig } = getCofnig();
import Container from './Container'
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
export default ({ children})=>{
  const [search, setSearch] = useState('')
  const handleSearchChange = useCallback((event)=>{
    setSearch(event.target.value)
  },[])
  const handleSearch = useCallback(()=>{
  },[])
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
              <a href={publicRuntimeConfig.OAUTH_URL}><Avatar size="large" icon="user" /></a>
          
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