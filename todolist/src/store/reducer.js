// 默认值
const defaultState = {
  inputValue: '',
  list: []
}
// state 所有的数据存储
// reducer 可以接受state 但是不能修改
export default (state=defaultState, action) => {
  if(action.type==='change_input_value'){
    // 深度拷贝
    const newState = JSON.parse(JSON.stringify(state))
    newState.inputValue= action.value
    return newState
  }
  if(action.type==='add_item'){
    const newState = JSON.parse(JSON.stringify(state))
    newState.list.push(newState.inputValue)
    newState.inputValue=""
    return newState
  }
  if(action.type==='del_item'){
    const newState = JSON.parse(JSON.stringify(state))
    newState.list.splice(action.index,1)
    return newState
  }
  return state
}