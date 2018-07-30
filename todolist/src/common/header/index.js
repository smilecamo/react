import React, { Component } from 'react';
import { CSSTransition } from 'react-transition-group';
import { connect } from 'react-redux';
import  * as actionCreators  from './store/actionCreators';
import {
  Div,
  HeaderWrapper,
  Logo,
  Nav,
  NavItem,
  SearchWrapper,
  NavSearch,
  SearchInfo,
  SearchTitle,
  SearchInfoSwitch,
  SearchInfoList,
  SearchInfoItem,
  Addition,
  Button
} from './style.js'
class Header extends Component{
  
  render() {
    const { focused, list, handleInputFocus, handleInputBlur} = this.props
    return (
    <Div className='border'>
    <HeaderWrapper>
      <Logo href='/'></Logo>
      <Nav>
        <NavItem className='left active'>首页</NavItem>
        <NavItem className='left'>下载</NavItem>
        <NavItem className='right'>登陆</NavItem>
        <NavItem className='right'>
          <i className='iconfont'>&#xe636;</i>
        </NavItem>
        <SearchWrapper>
          <CSSTransition
            in={focused}
            timeout={500}
            classNames='slider'>
            <NavSearch
              className={focused ? 'focused' : ''}
              onFocus={()=>handleInputFocus(list)}
              onBlur={handleInputBlur}>
            </NavSearch>
          </CSSTransition>
          <i className={focused ? 'focused iconfont' : 'iconfont'}>&#xe617;</i>
          {this.getListArea(focused)}
        </SearchWrapper>
      </Nav>
      < Addition>
        <Button className='writting'>
          <i className='iconfont'>&#xe6a4;</i>写文章</Button>
        <Button className='reg'>注册</Button>
      </Addition>
    </HeaderWrapper>
    </Div>
  )
  }
  getListArea(){
    const { focused, list, page ,mouseIn, totalPage, handleChangePage} = this.props
    const newList = list.toJS();
    const pageList = [];
    if(newList.length){
      for( let i = (page-1)*10;i<page*10;i++){
        pageList.push(
          <SearchInfoItem key={newList[i]}>{newList[i]}</SearchInfoItem>
        )
    }
    }
    if (focused || mouseIn) {
      return (
        <SearchInfo
        onMouseEnter={this.props.handleMouse}
        onMouseLeave={this.props.handleLeave}
        >
          <SearchTitle>热门搜索</SearchTitle>
          <SearchInfoSwitch onClick ={()=>handleChangePage(page,totalPage)}>换一换</SearchInfoSwitch>
          <SearchInfoList>
            {pageList}
          </SearchInfoList>
        </SearchInfo>
      )
    }else{
      return null
    }
}
}

const mapStateToProps = (state) => {
  return {
    focused: state.getIn(['header', 'focused']),
    list: state.getIn(['header','list']),
    page: state.getIn(['header','page']),
    totalPage: state.getIn(['header', 'totalPage']),
    mouseIn: state.getIn(['header', 'mouseIn']),
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    handleInputFocus(list) {
      if(list.size === 0){
        dispatch(actionCreators.getList())
      }
      dispatch(actionCreators.searchFocus())
    },
    handleInputBlur() {
      const action = actionCreators.searchBlur()
      dispatch(action)
    },
    handleMouse(){
      dispatch(actionCreators.mouseEnter())
    },
    handleLeave(){
      dispatch(actionCreators.mouseLeave())
    },
    handleChangePage(page,totalPage){
      if (page < totalPage){
        dispatch(actionCreators.changePage(page+1))
      }else{
        dispatch(actionCreators.changePage(1))
      }
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Header)