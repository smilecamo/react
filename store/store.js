import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunkMiddleware from 'redux-thunk';
import axios from 'axios';
const InitialState = {};
const LOGOUT = 'LOGOUT';
// REDUCERS
export const reducer = (state = InitialState, action) => {
  switch (action.type) {
    case LOGOUT:
      return {
        ...state,
        user:{}
      };
    default:
      return state;
  }
};
export function logout() {
  return dispatch => {
    axios
      .post('/logout')
      .then(res => {
        if (res.status === 200) {
          dispatch({
            type: LOGOUT
          });
        } else {
          console.log('logout failed', res);
        }
      })
      .catch(err => {
        console.log('logout failed', err);
      });
  };
}
export function initializeStore(initialState = InitialState) {
  return createStore(
    reducer,
    initialState,
    composeWithDevTools(applyMiddleware(thunkMiddleware))
  );
}
