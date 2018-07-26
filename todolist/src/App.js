import React, { Component } from 'react'
import { Input, Button, List} from 'antd';
import store from './store/index.js'
import 'antd/dist/antd.css';
class App extends Component{
  constructor(props){
    super(props)
    this.state = store.getState()
  }
  render() {
    return(
      <div>
        <Input value={this.state.inputValue} placeholder='Todo it' style={{width:'240px',marginTop: '20px',marginRight: '20px'}} />
        <Button type='primary'>提交</Button>
        <List
          style={{marginTop:'20px',width:'240px'}}
          bordered
          dataSource={this.state.list}
          renderItem={item => (<List.Item>{item}</List.Item>)}
        />
      </div>
    )
  }
}
export default App