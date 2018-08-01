import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom'
import { actionCreator } from '../store'
import {
  ListItem,
  ListInfo,
  LoadMore,
}from '../style.js'
class List extends PureComponent {
  render() {
    const { getMoreList,page } = this.props
    return (
      <div>
        {this.props.list.map((item)=>{
          return(
            <Link to={'/detail/'+ item.get('id')}>
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
            </Link>
          )
        })}
        <LoadMore onClick={()=>getMoreList(page)}>阅读更多</LoadMore>
      </div>
    )
  }
}
const mapState = (state) => ({
  list: state.get('home').get('articleList'),
  page: state.getIn(['home', 'articlePage'])
})
const mapDispatch = (dispatch) => ({
  getMoreList(page){
    dispatch(actionCreator.getMoreList(page))
  }
})
export default connect(mapState, mapDispatch)(List)