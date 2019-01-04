
import axios from 'axios'
import { fromJS } from 'immutable';
import  * as actionTypes from './actionTypes'

export const searchFoucus = () => ({
  type: actionTypes.SEARCH_FOUCUS
})
export const searchBlur = () => ({
  type: actionTypes.SEARCH_BLUR
})
export const MouseEnter = () => ({
  type: actionTypes.MOUSEENTER
})
export const MouseLeave = () => ({
  type: actionTypes.MOUSELEAVE
})
export const changePage = (page) => ({
  type: actionTypes.CHANGE_PAGE,
  page
})
const changeList = (data) => ({
  type: actionTypes.CHNAGE_LIST,
  data: fromJS(data),
  totalPage: Math.ceil(data.length / 10)
})
export const getList = () => {
  return (dispatch) => {
    axios.get('/api/headerList.json')
      .then((res)=>{
        const data = res.data
        dispatch(changeList(data.data))
      })
      .catch((res) => {
        console.log(res)
      })
  }
}