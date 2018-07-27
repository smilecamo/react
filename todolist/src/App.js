import React, { Component } from 'react'
import AppUI from './AppUI'
import store from './store/index.js'
import { getChangeInput, getAddItem, getDelItem} from './store/actionCreators'
import 'antd/dist/antd.css';
class App extends Component{
  constructor(props){
    super(props)
    this.handleInputChange = this.handleInputChange.bind(this)
    this.handStoreChange = this.handStoreChange.bind(this)
    this.handleBtnClick = this.handleBtnClick.bind(this)
    this.handleClickItem = this.handleClickItem.bind(this)
    // 获取state数据
    this.state = store.getState()
    // 监测数据改变 订阅store的改变
    store.subscribe(this.handStoreChange)
  }
  render() {
    return(
      <AppUI
      inputValue={this.state.inputValue}
      handleInputChange = {this.handleInputChange}
      handleBtnClick = {this.handleBtnClick}
      list={this.state.list}
      handleClickItem = {this.handleClickItem}
      />
    )
  }
  handleInputChange(e){
    const action = getChangeInput(e.target.value)
    store.dispatch(action)
  }
  handleBtnClick(){
    const action = getAddItem()
    store.dispatch(action)
  }
  handleClickItem(index) {
    const action = getDelItem(index)
    store.dispatch(action)
  }
  handStoreChange(){
    this.setState(store.getState())
  }
  
}
export default App