import React, { Component } from 'react';
import { HomeWrapper , HomeLeft, HomeRight} from './style.js'
import Topic from './component/Topic'
import List from './component/List'
import Recommend from './component/Recommend'
import Writer from './component/Writer'
class Home extends Component {
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
      </div>
    )
  }
}
export default Home