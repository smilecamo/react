import React ,{ Component } from 'react'
import PropTypes from 'prop-types'
class TodoItem extends Component {
  constructor(props) {
    super(props);
    this.handleClick= this.handleClick.bind(this)
  }
  // 性能提升 通过判断数据是否需要重新渲染
  shouldComponentUpdate(nextProps,nextState){
    if(nextProps.content != this.props.content){
      return true;
    }else{
      return false
    }
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
  // 从父级接受值之后,第一次渲染的时候不执行,重新渲染组件才会执行
  componentWillReceiveProps(){
    console.log('child componentWillReceiveProps');
  }
  // 组件被销毁之后执行
  componentWillUnmount(){
    console.log('child componentWillUnmount');
  }
}
// 类型校验
TodoItem.propTypes = {
  // isRequired 必须传值
  text: PropTypes.string.isRequired,
  content: PropTypes.string,
  delItem: PropTypes.func,
  // 或者,可以做多种判断
  // index: PropTypes.arrayOf(PropTypes.number,PropTypes.string)
}
// 默认值
TodoItem.defaultProps = {
  text: 'hi'
}
export default TodoItem