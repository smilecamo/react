import { CHANGE_INPUT_VALUE, ADD_ITEM,DEL_ITEM} from './actionTypes.js'
export const getChangeInput = (value) => ({
  type: CHANGE_INPUT_VALUE,
  value
})
export const getAddItem = () => ({
  type: ADD_ITEM
})
export const getDelItem = (index) => ({
  type: DEL_ITEM,
  index
})