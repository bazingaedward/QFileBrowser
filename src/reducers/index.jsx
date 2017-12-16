import * as actions from '../actions';

const initialState = {
  path: '/',
  tree: []
}

function appReducer(state = initialState, action) {
  switch(action.type){
    case actions.REFRESH_DIRECTORY:
      console.log(actions.REFRESH_DIRECTORY);
      return Object.assign({}, state, {
        update: true,
        path: action.path
      })
      break;
    default:
      return state;
  }
}

export default appReducer;
