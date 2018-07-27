import{ DEL_ITEM ,ADD_ITEM ,CHANGE_INPUT_VALUE } from './actionTypes.js'
// 默认值
const defaultState = {
  inputValue: '',
  list: []
}
// state 所有的数据存储
// reducer 可以接受state 但是不能修改
export default (state=defaultState, action) => {
  if (action.type === CHANGE_INPUT_VALUE){
    // 深度拷贝
    const newState = JSON.parse(JSON.stringify(state))
    newState.inputValue= action.value
    return newState
  }
  if (action.type === ADD_ITEM) {
    const newState = JSON.parse(JSON.stringify(state))
    newState.list.push(newState.inputValue)
    newState.inputValue=""
    return newState
  }
  if (action.type === DEL_ITEM) {
    const newState = JSON.parse(JSON.stringify(state))
    newState.list.splice(action.index,1)
    return newState
  }
  return state
}