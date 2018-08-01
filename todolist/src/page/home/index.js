import React, { PureComponent } from 'react';
import axios from 'axios'
import { connect } from 'react-redux'
import {
  HomeWrapper,
  HomeLeft,
  HomeRight,
  BackTop
} from './style.js'
import Topic from './component/Topic'
import List from './component/List'
import Recommend from './component/Recommend'
import Writer from './component/Writer'
import { actionCreator } from './store/index'
class Home extends PureComponent {
  render() {
    return (
      <div>
      <HomeWrapper>
        <HomeLeft>
          <img
            className='banner-img'
            src='//upload.jianshu.io/admin_banners/web_images/4358/a52cb0d0ef97a08087a234f4e25702b2471d49a4.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540'
            alt=''
            />
          <Topic></Topic>
          <List></List>
        </HomeLeft>
        <HomeRight>
          <Recommend></Recommend>
          <Writer></Writer>
        </HomeRight>
      </HomeWrapper>
      {
        this.props.showScroll? <BackTop onClick= {this.scrollTop}>顶部</BackTop>:null
      }
      </div>
    )
  }
  scrollTop() {
    window.scrollTo(0, 0)
  }
  componentDidMount(){
    this.props.changeHomeData();
    this.bindEvents();
  }
  bindEvents(){
    window.addEventListener('scroll',this.props.changeScrollTopShow)
  }
  componentWillUnmount(){
    window.removeEventListener('scroll', this.props.changeScrollTopShow)
  }
}
const mapState = (state) => ({
  showScroll: state.getIn(['home', 'scrollShow'])
})
const mapDispatch= (dispatch) => ({
  changeHomeData(){
    const action = actionCreator.getInfoList();
    dispatch(action);
  },
  changeScrollTopShow(){
    if(document.documentElement.scrollTop>400){
      const action = actionCreator.toggleTopShow(true);
      dispatch(action)
    }else{
      const action = actionCreator.toggleTopShow(false);
      dispatch(action)
    }
  }
})
export default connect(mapState, mapDispatch)(Home)