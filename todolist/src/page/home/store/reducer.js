// import * as actionType from './actionType'
import {
  fromJS
} from 'immutable'
import * as actionType from './actionType'
const defaultState = fromJS({
  topList: [],
  articleList: [],
  recommentList: [],
  articlePage: 1,
  scrollShow: false
})

export default (state = defaultState, action) => {
  switch(action.type){
    case actionType.CHANGE_HOME_DATA:
      return state.merge({
        topList: fromJS(action.topList),
        articleList: fromJS(action.articleList),
        recommentList: fromJS(action.recommentList),
      })
    case actionType.GET_MORE_LIST:
      return state.merge({
        'articleList': state.get('articleList').concat(action.list),
        'articlePage':action.nextPage
      })
    case actionType.TOGGLESHOW:
      return state.merge({
        'scrollShow': action.show
      })
      // state.set('articleList', state.get('articleList').concat(action.list))
    default:
      return state;
  }
  
}