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
  }

  render() {
    return (
      <Fragment>
        <div>
          <label htmlFor='insertArea'>Todo:</label>
          <input
            id='insertArea'
            className='input'
            value={this.state.inputValue}
            onChange={this.handleInputChange.bind(this)}
          />
          <button onClick={this.handleClick.bind(this)}>提交</button>
        </div>
        <ul>
          <div>
          {
            this.state.list.map((item,index) => {
              return (
                // 父级往子集穿值  通过 自定义={值} 然后子组件通过this.props.自定义
                // 传递方法  自定义方法名={this.方法.bind(this)}  接收this.props.自定义方法名(参数)
              <TodoItem
              content={item}
              index={index}
              delItem={this.hadleClickLi.bind(this)}
              ></TodoItem>
            )
            })
          }
          </div>
        </ul>
      </Fragment>
    )
  }
  handleInputChange(e) {
    this.setState({
      inputValue: e.target.value
    })
  }
  handleClick() {
    this.setState({
      list: [...this.state.list, this.state.inputValue],
      inputValue: ''
    })
  }
  hadleClickLi(index) {
    const list = [...this.state.list];
    list.splice(index, 1)
    this.setState({
      list: list
    })
  }
}

export default Todolist