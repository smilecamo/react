import React, { Component, Fragment } from 'react';
import { CSSTransition } from 'react-transition-group'
import {
  Headerwrapper,
  Logo,
  Nav,
  NavItem,
  NavSearch,
  Addition,
  Button,
  NavSearchWrap
} from './style'
class Header extends Component{
  constructor(props){
    super(props)
    this.state ={
      foucused: false
    }
    this.searchFoucus = this.searchFoucus.bind(this)
    this.searchBlur = this.searchBlur.bind(this)
  }
  render(){
    return(
      <Fragment>
        <Headerwrapper>
          <Logo />
          <Nav>
            <NavItem className='left active'>首页</NavItem>
            <NavItem className='left'>下载App</NavItem>
            <NavSearchWrap>
              <CSSTransition
                timeout={200}
                in={this.state.foucused}
                classNames='slider'
              >
                <NavSearch
                  className={this.state.foucused? 'foucused': ''}
                  onFocus={this.searchFoucus}
                  onBlur={this.searchBlur}
                ></NavSearch>
              </CSSTransition>
              <i
                className={this.state.foucused? 'iconfont foucused': 'iconfont'}
              >&#xe617;</i>
            </NavSearchWrap>
            <NavItem className='right'>
              <i className="iconfont">&#xe636;</i>
            </NavItem>
            <NavItem className='right'>登录</NavItem>
          </Nav>
          <Addition>
            <Button className='write'>
            <i className="iconfont">&#xe6a4;</i>
            写文章</Button>
            <Button className='reg'>注册</Button>
          </Addition>
        </Headerwrapper>
      </Fragment>
      )
  }
  searchFoucus(){
    this.setState({
      foucused: true
    })
  }
  searchBlur(){
    this.setState({
      foucused: false
    })
  }
}

export default Header