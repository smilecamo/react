/**
 * Todolist
 */

import React, { Component, Fragment } from 'react'
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
        {/* Todolist */}
        {/* laber中for可以使用htmlFor='id' class应该使用className */}
        {/* dangerouslySetInnerHTML={{ __html: item }} 可以渲染标签*/}
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
          {
            this.state.list.map((item,index) => {
              return <li
              key={index}
              onClick={this.hadleClickLi.bind(this,index)}
              dangerouslySetInnerHTML={{__html: item}}
              ></li>
            })
          }
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