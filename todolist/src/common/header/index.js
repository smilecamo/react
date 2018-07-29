import React from 'react';
import { CSSTransition } from 'react-transition-group'
import { connect } from 'react-redux'
import {
  HeaderWrapper,
  Logo,
  Nav,
  NavItem,
  SearchWrapper,
  NavSearch,
  Addition,
  Button
} from './style.js'

const Header = (props) => {
  return (
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
            in={props.foucused}
            timeout={500}
            classNames='slider'>
            <NavSearch
              className={props.foucused ? 'foucused' : ''}
              onFocus={props.handleInputFocus}
              onBlur={props.handleInputBlur}>
            </NavSearch>
          </CSSTransition>
          <i className={props.foucused ? 'foucused iconfont' : 'iconfont'}>&#xe617;</i>
        </SearchWrapper>
      </Nav>
      <Addition>
        <Button className='writting'>
          <i className='iconfont'>&#xe6a4;</i>
          写文章</Button>
        <Button className='reg'>注册</Button>
      </Addition>
    </HeaderWrapper>
  )
}

// class Header extends Component{
//   render() {
//     return (
//       <HeaderWrapper>
//         <Logo href='/'></Logo>
//         <Nav>
//           <NavItem className='left active'>首页</NavItem>
//           <NavItem className='left'>下载</NavItem>
//           <NavItem className='right'>登陆</NavItem>
//           <NavItem className='right'>
//             <i className='iconfont'>&#xe636;</i>
//           </NavItem>
//           <SearchWrapper>
//             <CSSTransition
//               in={this.props.foucused}
//               timeout={500}
//               classNames='slider'
//             >
//               <NavSearch
//                 className={this.props.foucused ? 'foucused' : ''}
//                 onFocus={this.props.handleInputFocus}
//                 onBlur={this.props.handleInputBlur}
//               ></NavSearch>
//             </CSSTransition>
//             <i className={this.props.foucused ? 'foucused iconfont' : 'iconfont'}>&#xe617;</i>
//           </SearchWrapper>
//         </Nav>
//         <Addition>
//           <Button className='writting'>
//             <i className='iconfont'>&#xe6a4;</i>
//               写文章</Button>
//           <Button className='reg'>注册</Button>
//         </Addition>
//       </HeaderWrapper>
//     )
//   }
// }
const mapStateToProps = (state) => {
  return {
    foucused: state.foucused
  }
}
const mapDispathToProps = (dispatch) => {
  return {
    handleInputFocus() {
      const action = {
        type: 'search_focus'
      }
      dispatch(action)
    },
    handleInputBlur() {
      const action = {
        type: 'search_blur'
      }
      dispatch(action)
    }
  }
}
export default connect(mapStateToProps, mapDispathToProps)(Header)