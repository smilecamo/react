import {
  combineReducers
} from 'redux'
// 各种零碎reducer
import headerReducer from '../Header/store/reducer'

// combineReducers 整合零散的reducers
const reducer =  combineReducers ({
  header: headerReducer
})

export default reducer