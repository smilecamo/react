import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  ListItem,
  ListInfo,
}from '../style.js'
class List extends Component {
  render() {
    return (
      <div>
        {this.props.list.map((item)=>{
          return(
            <ListItem key={item.get('id')}>
              <img
                className='listImg'
                src={item.get('picUrl')}
                alt=''
                />
              <ListInfo>
                <h3 className='title'>{item.get('title')}</h3>
                <p className='desc'>{item.get('desc')}</p>
              </ListInfo>
            </ListItem>
          )
        })}
      </div>
    )
  }
}
const mapState = (state) => ({
  list: state.get('home').get('articleList')
})
export default connect(mapState,null)(List)