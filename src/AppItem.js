import React, { Component } from 'react';
import PropTypes from 'prop-types'
class AppItem extends Component {
  constructor(props){
    super(props)
    this.handleClick = this.handleClick.bind(this)
  }
  render (){
    const { content } = this.props
    return (
      <div onClick={this.handleClick}>
        {content}
      </div>
    )
  }
  handleClick(){
    this.props.deleteItem(this.props.index)
  }
}
AppItem.propTypes = {
  content: PropTypes.string,
  deleteItem: PropTypes.func,
  index: PropTypes.number
}
export default AppItem