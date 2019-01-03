import {
  CHANGE_INPUT_VALUE,
  CHANGE_LIST,
  DEL_LIST
} from './actionTypes'
const defaultState = {
  inputValue: 'ha',
  list: []
}
export default (state=defaultState,action) => {
  if (action.type === CHANGE_INPUT_VALUE){
    const newState = JSON.parse(JSON.stringify(state))
    newState.inputValue = action.value
    return newState
  }
  if (action.type === CHANGE_LIST){
    const newState = JSON.parse(JSON.stringify(state))
    if (newState.inputValue === ''){
      alert('不允许为空')
    }else{
      newState.list.push(newState.inputValue)
      newState.inputValue = ''
      return newState
    }
  }
  if (action.type === DEL_LIST){
    const newState = JSON.parse(JSON.stringify(state))
    newState.list.splice(action.index,1)
    return newState
  }
  return(
    state
  )
}