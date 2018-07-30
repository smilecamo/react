import * as actionType from './actionType'
import { fromJS } from 'immutable'
import axios from 'axios'
export const searchFocus = () =>({
  type: actionType.SEARCH_FOCUS
})

export const searchBlur = () => ({
  type: actionType.SEARCH_BLUR
})
export const mouseEnter = () => ({
  type: actionType.MOUSE_ENTER
})
export const mouseLeave = () => ({
  type: actionType.MOUSE_LEAVE
})
export const changePage = (page) => ({
  type: actionType.CHANGE_PAGE,
  page
})
const changeList=(data)=> ({
  type: actionType.CHANGE_LIST,
  data: fromJS(data),
  totalPage: Math.ceil(data.length /10 )
})
export const getList = () => {
  return (dispatch) => {
    axios.get('/api/headerList.json')
    .then((res)=>{
      const data = res.data
      dispatch(changeList(data.data))
    })
    .catch(()=>{
      console.log('热门搜索数据有误');
    })
  }
}