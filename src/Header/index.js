import React, { Component, Fragment } from 'react';
import { CSSTransition } from 'react-transition-group'
import {connect} from 'react-redux'
import {
  actionCreators
} from './store'
import {
  Headerwrapper,
  Logo,
  Nav,
  NavItem,
  NavSearch,
  SearchInfo,
  SearchTitle,
  SearchInfoSwitch,
  SearchItem,
  Addition,
  Button,
  NavSearchWrap
} from './style'

class Header extends Component{
  constructor(props){
    super(props)
    this.getListArea = this.getListArea.bind(this)
  }
  render(){
    const {
      foucused,
      searchFoucus,
      searchBlur
    } = this.props
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
              in={foucused}
              classNames='slider'
            >
            <NavSearch
              className={foucused? 'foucused': ''}
              onFocus={searchFoucus}
              onBlur={searchBlur}
              ></NavSearch>
            </CSSTransition>
            <i className={foucused? 'iconfont foucused': 'iconfont'}>&#xe617;</i>
            {this.getListArea()}
          </NavSearchWrap>
          <NavItem className='right'><i className="iconfont">&#xe636;</i></NavItem>
          <NavItem className='right'>登录</NavItem>
        </Nav>
        <Addition>
          <Button className='write'><i className="iconfont">&#xe6a4;</i>写文章</Button>
          <Button className='reg'>注册</Button>
        </Addition>
      </Headerwrapper>
    </Fragment>
  )
  }
  getListArea = () => {
    const {
      foucused,
      HeaderList,
      page,
      totalPage,
      mouseIn,
      MouseEnter,
      MouseLeave,
      changePage
    } = this.props
    const NewList = HeaderList.toJS()
    const pageList = []
    if (NewList.length){
      for(let i = (page-1)*10; i<page * 10;i++){
        pageList.push(<SearchItem key={NewList[i]}>{NewList[i]}</SearchItem>)
      }
    }
    if (foucused || mouseIn) {
      return(
        <SearchInfo
          onMouseEnter={MouseEnter}
          onMouseLeave={MouseLeave}
        >
          <SearchTitle>
            热门搜索
            <SearchInfoSwitch
              onClick = {
                () => changePage(page,totalPage)
              }
            >换一批</SearchInfoSwitch>
          </SearchTitle>
          <div>
            {pageList}
          </div>
        </SearchInfo>
    )}else{
      return null
    }
}
}
const mapStateToProps = (state) => {
  return {
    foucused: state.header.get('foucused'),
    HeaderList: state.header.get('list'),
    page: state.header.get('page'),
    totalPage: state.header.get('totalPage'),
    mouseIn: state.header.get('mouseIn')
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    searchFoucus() {
      // 获取搜索框的内容
      dispatch(actionCreators.getList())
      // 搜索框
      dispatch(actionCreators.searchFoucus())
    },
    searchBlur() {
      dispatch(actionCreators.searchBlur())
    },
    MouseEnter(){
      dispatch(actionCreators.MouseEnter())
    },
    MouseLeave() {
      dispatch(actionCreators.MouseLeave())
    },
    changePage(page, totalPage) {
      if (page < totalPage){
        dispatch(actionCreators.changePage(page + 1))
      }else{
        dispatch(actionCreators.changePage(1))
      }
      
    }
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(Header)