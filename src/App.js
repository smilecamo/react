import React, { Component } from 'react'
import store  from './store'
import {
  changeInputValue,
  changeList,
  delList
} from './store/actionCreator'
import {
  Input,
  Button,
  List
} from 'antd'
class App extends Component {
  constructor(state){
    super(state)
    this.state = store.getState()
    this.handleStoreChange = this.handleStoreChange.bind(this)
    this.handleInputChange = this.handleInputChange.bind(this)
    this.changeList = this.changeList.bind(this)
    store.subscribe(this.handleStoreChange)
  }
  render() {
    return (
      <div style={{marginTop: 20}}>
        <Input
        style={{width: 300,marginRight: 20}}
        value={this.state.inputValue}
        placeholder="Todo"
        onChange={this.handleInputChange}
        />
        <Button
        type="primary"
        onClick={this.changeList}
        >提交</Button>
        <List
          style={{width: 300}}
          bordered
          dataSource={this.state.list}
          renderItem={(item,index) => (
            <List.Item
            onClick={this.delItem.bind(this,index)}>
              {item}
            </List.Item>
          )}
        />
      </div>
    )
  }
  handleInputChange(e){
    const action = changeInputValue(e.target.value)
    store.dispatch(action)
  }
  changeList(){
    const action = changeList()
    store.dispatch(action)
  }
  delItem(index){
    const action = delList(index)
    store.dispatch(action)
  }
  handleStoreChange(){
    this.setState(store.getState())
  }
}

export default App