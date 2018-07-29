const defaultState = {
  foucused: false
}

export default (state=defaultState, action) => {
  if (action.type ==='search_focus'){
    return{
      foucused: true
    }
  }
  if (action.type ==='search_blur'){
    return{
      foucused: false
    }
  }
  return state;
}