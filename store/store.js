import { createStore, combineReducers, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension/logOnlyInProduction';
const initialState = {
  count: 0
};
const initialUser = {
  userName: 'Yang'
};
const ADD = 'ADD';
function count(state = initialState, action) {
  switch (action.type) {
    case ADD:
      return { count: state.count + (action.num || 1) };
    default:
      return state;
  }
}
const UPDATANAME = 'UPDATANAME';
function user(state = initialUser, action) {
  switch (action.type) {
    case UPDATANAME:
      return { ...state, userName: action.name };
    default:
      return state;
  }
}

const allReducer = combineReducers({
  count,
  user
});

function add(num) {
  return {
    type: ADD,
    num
  };
}
function asyncAdd(num) {
  return dispatch => {
    setTimeout(() => {
      dispatch(add(num));
    }, 1000);
  };
}
console.log(store.getState());
store.dispatch(add(5));
store.dispatch(asyncAdd(5));
store.dispatch({ type: UPDATANAME, name: 'YONG' });
store.subscribe(() => {
  console.log('changeStore', store.getState());
});
console.log(store.getState());
// 每次都新创建store
export default function initializeStore(state) {
  const store = createStore(
    allReducer,
    Object.assign({},state),
    composeWithDevTools(applyMiddleware(ReduxThunk))
  );
  return store;
}
