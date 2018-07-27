import React, { Component } from 'react'
import { Input, Button, List} from 'antd';
import store from './store/index.js'
import 'antd/dist/antd.css';
class App extends Component{
  constructor(props){
    super(props)
    this.handleInputChange = this.handleInputChange.bind(this)
    this.handStoreChange = this.handStoreChange.bind(this)
    this.handleBtnClick = this.handleBtnClick.bind(this)
    // 获取state数据
    this.state = store.getState()
    // 监测数据改变 订阅store的改变
    store.subscribe(this.handStoreChange)
  }
  render() {
    return(
      <div>
        <Input
        value={this.state.inputValue}
        placeholder='Todo it'
        style={{width:'240px',marginTop: '20px',marginRight: '20px'}} 
        onChange={this.handleInputChange}
        />
        <Button type='primary'
        onClick={this.handleBtnClick}
        >提交</Button>
        <List
          style={{marginTop:'20px',width:'240px'}}
          bordered
          dataSource={this.state.list}
          renderItem={(item, index)=> (<List.Item onClick={this.handleClickItem.bind(this,index)}>{item}</List.Item>)}
        />
      </div>
    )
  }
  handleInputChange(e){
    const action = {
      type: 'change_input_value',
      value: e.target.value
    }
    store.dispatch(action)
  }
  handleBtnClick(){
    const action = {
      type: 'add_item'
    }
    store.dispatch(action)
  }
  handleClickItem(index) {
    const action = {
      type: 'del_item',
      index
    }
    store.dispatch(action)
  }
  handStoreChange(){
    this.setState(store.getState())
  }
  
}
export default App