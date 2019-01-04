// 数据管理工具
import { fromJS }  from 'immutable'
import {
  SEARCH_FOUCUS,
  SEARCH_BLUR,
  CHNAGE_LIST,
  MOUSEENTER,
  MOUSELEAVE,
  CHANGE_PAGE
} from '../store/actionTypes'
const defaultState = fromJS({
  foucused: false,
  mouseIn: false,
  list: [],
  page: 1,
  totalPage: 1
})

export default (state = defaultState, action) => {
  switch (action.type){
    case SEARCH_FOUCUS:
      return state.set('foucused', true);
    case SEARCH_BLUR:
      return state.set('foucused', false);
    case CHNAGE_LIST:
      return state.merge({
        list: action.data,
        totalPage: action.totalPage
      })
    case MOUSEENTER:
      return state.set('mouseIn', true);
    case MOUSELEAVE:
      return state.set('mouseIn', false);
    case CHANGE_PAGE:
      return state.set('page', action.page);
    default:
      return state;
  }
}