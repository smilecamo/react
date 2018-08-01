import { combineReducers } from 'redux-immutable'
import headerReducer from '../common/header/store/reducer'
import homeReducer from '../page/home/store/reducer'
import deatilReducer from '../page/detail/store/reducer'

const reducer =  combineReducers ({
  header: headerReducer,
  home: homeReducer,
  detail: deatilReducer,
})

export default reducer