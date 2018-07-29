import { CHANGE_INPUT, CLICK_BTN, CHANGE_DEL } from './actionTypes'

export const getChangeInput = (value) => ({
  type: CHANGE_INPUT,
  value
})
export const getClickBtn = () => ({
  type: CLICK_BTN
})
export const getClickDel = (index) => ({
  type: CHANGE_DEL,
  index
})