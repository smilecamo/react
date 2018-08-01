import axios from 'axios'
import { fromJS } from 'immutable'
import * as actionType from './actionType'
const changeHomeList = (result) => ({
  type: actionType.CHANGE_HOME_DATA,
  topList: result.topList,
  articleList: result.articleList,
  recommentList: result.recommentList
})
const getMoreListItem = (list,nextPage) => ({
  type: actionType.GET_MORE_LIST,
  list: fromJS(list),
  nextPage
})
export const getInfoList = () => {
  return (dispatch) => {
    axios.get('/api/homeList.json')
      .then((res) => {
        const result = res.data.data;
        const action = changeHomeList(result)
        dispatch(action)
      })
  }
}
export const getMoreList = (page) =>{
  return (dispatch) => {
    axios.get('/api/getMoreList.json?page='+page)
    .then((res)=>{
      const result = res.data.data.list;
      const action = getMoreListItem(result,page+1)
      dispatch(action)
    })
  }
}
export const toggleTopShow = (show) => ({
  type: actionType.TOGGLESHOW,
  show
})