import axios from 'axios'
import * as actionType from './actionType'
const changeDetail = (title,desc)=>({
  type: actionType.CHANGE_DETAIL,
  title,
  desc,
})
export const getDeatil =(id)=>{
  return(dispatch)=>{
    axios.get('/api/detailList.json?id='+id)
    .then((res)=>{
      const detail = res.data.data;
      dispatch(changeDetail(detail.title,detail.desc))
      console.log(res)
    })
  }
}