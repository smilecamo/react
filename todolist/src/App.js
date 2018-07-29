import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getClickDel, getClickBtn, getChangeInput} from './store/actionCreators'
class App extends Component {
  render() {
    return (
      <div>
        <div>
          <input value={this.props.inputValue}
          onChange={this.props.handleChange}
          />
          <button onClick={this.props.handleClick}>提交</button>
        </div>
        <ul>
          {
            this.props.list.map((item, index)=>{
              return (
                <li key={index} onClick={this.props.handleDel}>{item}</li>
              )
            })
          }
        </ul>
      </div>
    )
  }

}
// 映射数据关系  怎么连接 连接规则
const mapStateToProps = (state) => {
  return {
    inputValue: state.inputValue,
    list: state.list
  }
}
// 修改数据  把store.dispatch 绑定到props上  怎么修改数据并且关联
const mapDispatchToProps = (dispatch) => {
  return {
    handleChange(e){
      const action = getChangeInput(e.target.value)
      dispatch(action);
    },
    handleClick(){
      const action = getClickBtn()
      dispatch(action);
    },
    handleDel(index){
      const action = getClickDel(index)
      dispatch(action);
    }
  }
}
// 通过connect 连接store
export default connect(mapStateToProps, mapDispatchToProps)(App)