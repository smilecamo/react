import React, { Component, Fragment } from 'react';
import AppItem from'./AppItem'
import './style.css'
class App extends Component {
  constructor(props) {
    super(props)
    this.state ={
      inputValue: '',
      list: []
    }
  }
  // 挂载之前执行
  componentWillMount(){
    console.log('组件挂载之前')
  }
  // 挂载之后执行
  componentDidMount(){
    console.log('组件挂载之后')
  }
  // 确定更新吗 false不会被更新 true会被更新
  shouldComponentUpdate(){
    console.log('组件更新的时候')
    return true
  }
  // 更新之前
  componentWillUpdate(){
    console.log('更新之前')
  }
  // 更新之后
  componentDidUpdate(){
    console.log('更新之后执行')
  }
  render() {
    console.log('render')
    return (
      <Fragment>
        <input
          className='input'
          type="text"
          value={this.state.inputValue}
          onChange={this.onChangeInputValue.bind(this)}
        />
        <button
          onClick={this.handleBtnClick.bind(this)}
        >提交</button>
        <ul>
          {
            this.state.list.map((item, index) =>{
              return (
              <Fragment>
                <AppItem
                content={item}
                index={index}
                deleteItem={this.removeThis.bind(this)}
                />
              </Fragment>
              )
            })
          }
        </ul>
      </Fragment>
    );
  }
  onChangeInputValue(e){
    this.setState({
      inputValue: e.target.value
    })
  }
  handleBtnClick(){
    this.setState({
      list: [...this.state.list, this.state.inputValue],
      inputValue: ''
    })
  }
  removeThis(index){
    const list = [...this.state.list]
    list.splice(index, 1)
    this.setState({
      list
    })
  }
}

export default App;
