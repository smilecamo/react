import React, { Component } from 'react';

class AppItem extends Component {
  constructor(props){
    super(props)
    this.handleClick = this.handleClick.bind(this)
  }
    // 组件去除的时候
    componentWillUnmount(){
      console.log('组件移除')
    }
  render (){
    const { content } = this.props
    return (
      <div onClick={this.handleClick}>
        { content }
      </div>
    )
  }
  handleClick(){
    const { deleteItem,index } = this.props
    deleteItem(index)
  }
}

export default AppItem