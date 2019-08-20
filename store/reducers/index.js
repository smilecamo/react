import { ADD, UPDATANAME } from '../actions/index';
import { initialUser, initialState } from '../state';

export  function count(state = initialState, action) {
  switch (action.type) {
    case ADD:
      return { count: state.count + (action.num || 1) };
    default:
      return state;
  }
}
export  function user(state = initialUser, action) {
  switch (action.type) {
    case UPDATANAME:
      return { ...state, userName: action.name };
    default:
      return state;
  }
}
