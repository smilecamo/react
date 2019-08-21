import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunkMiddleware from 'redux-thunk';

const InitialState={

}
// REDUCERS
export const reducer = (state = InitialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export function initializeStore(initialState = InitialState) {
  return createStore(
    reducer,
    initialState,
    composeWithDevTools(applyMiddleware(thunkMiddleware))
  );
}
