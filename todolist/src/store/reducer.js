import { CHANGE_INPUT, CLICK_BTN, CHANGE_DEL } from './actionTypes'
const defaultState = {
  inputValue: '',
  list: []
}
export default (state = defaultState, action) => {
  if (action.type === CHANGE_INPUT) {
    const newState = JSON.parse(JSON.stringify(state));
    newState.inputValue = action.value
    return newState
  }
  if (action.type === CLICK_BTN) {
    const newState = JSON.parse(JSON.stringify(state));
    // newState.list = [...newState.list,newState.list]
    newState.list.push(newState.inputValue)
    newState.inputValue = ''
    return newState
  }
  if (action.type === CHANGE_DEL) {
    const newState = JSON.parse(JSON.stringify(state));
    newState.list.splice(action.index,1)
    return newState
  }
  return state;
}