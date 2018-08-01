import { fromJS } from 'immutable';
import * as actionType from './actionType'
const deafuleState = fromJS({
  title: "",
  desc: ''
})
export default (state = deafuleState,action) => {
  switch(action.type){
    case actionType.CHANGE_DETAIL:
      return state.merge({
        title: action.title,
        desc: action.desc
      })
    default:
      return state
  }
}