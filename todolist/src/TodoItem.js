import React ,{ Component } from 'react'
import PropTypes from 'prop-types'
class TodoItem extends Component {
  constructor(props) {
    super(props);
    this.handleClick= this.handleClick.bind(this)
  }
  render() {
    const { content ,text} = this.props;
    return (
      <div onClick={this.handleClick}>
        {text}---{content}
      </div>
      )
  }
  handleClick(){
    const {delItem ,index} = this.props;
    delItem(index)
  }
}
// 类型校验
TodoItem.propTypes = {
  // isRequired 必须传值
  text: PropTypes.string.isRequired,
  content: PropTypes.string,
  delItem: PropTypes.func,
  // 或者,可以做多种判断
  index: PropTypes.arrayOf(PropTypes.number,PropTypes.string)
}
// 默认值
TodoItem.defaultProps = {
  text: 'hi'
}
export default TodoItem