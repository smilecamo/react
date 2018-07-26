/**
 * Todolist
 */

import React, { Component, Fragment } from 'react'
import TodoItem from './TodoItem'
import './style.css'
class Todolist extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: '',
      list: []
    }
    this.handleInputChange = this.handleInputChange.bind(this)
    this.handleClick = this.handleClick.bind(this)
    this.handleClickLi = this.handleClickLi.bind(this)
  }
  render() {
    console.log('render');
    return (
      <Fragment>
        <div>
          <label htmlFor='insertArea'>Todo:</label>
          <input
            id='insertArea'
            className='input'
            value={this.state.inputValue}
            onChange={this.handleInputChange}
          />
          <button onClick={this.handleClick}>提交</button>
        </div>
        <ul>{this.getItem()}</ul>
      </Fragment>
    )
  }
  getItem() {
    return (
      this.state.list.map((item, index) => {
        return (
          // 父级往子集穿值  通过 自定义={值} 然后子组件通过this.props.自定义
          // 传递方法  自定义方法名={this.方法.bind(this)}  接收this.props.自定义方法名(参数)
          <TodoItem
            key={index}
            content={item}
            index={index}
            delItem={this.handleClickLi}
          ></TodoItem>
        )
      })
    )
  }
  handleInputChange(e) {
    // this.setState({
    //   inputValue: e.target.value
    // })
    // 异步先定义
    const value = e.target.value
    this.setState(()=>({
      inputValue: value
    }))
  }
  handleClick() {
    // this.setState({
    //   list: [...this.state.list, this.state.inputValue],
    //   inputValue: ''
    // })
    this.setState((prevState)=>({
      list: [...prevState.list,prevState.inputValue],
      inputValue: ''
    }))
  }
  handleClickLi(index) {
    const list = [...this.state.list];
    list.splice(index, 1)
    this.setState({
      list: list
    })
  }
  // 生命周期函数
  // 组件第一次被挂载的时候执行
    componentWillMount(){
      console.log('组件第一次被挂载之前执行');
    }
  // 组件第一次被挂载完成之后的时候执行
  componentDidMount(){
    console.log('组件第一次挂载成功之后执行');
  }

  // 
  shouldComponentUpdate(){
    console.log('组件需要更新吗');
    return true
  }
  componentWillUpdate(){
    console.log('组件被更新之前执行');
  }
  componentDidUpdate(){
    console.log('组件被更新完成之后');
  }
}

export default Todolist