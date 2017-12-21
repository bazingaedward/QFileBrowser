import { CHANGE_DIRECTORY, UPDATE_DATA } from '../actions';

const initialState = {
  paths: [],
  data: [
    {
      key: '0',
      name: 'hello',
      isDir: true,
      size: 0,
      date: new Date().toLocaleTimeString(),
    },
    {
      key: '1',
      name: 'world',
      isDir: true,
      size: 0,
      date: new Date().toLocaleTimeString(),
    },
    {
      key: '2',
      name: 'test.ppt',
      isDir: false,
      size: 128,
      date: new Date().toLocaleTimeString(),
    }]
}

function appReducer(state = initialState, action) {
  switch(action.type){
    case CHANGE_DIRECTORY:
      return Object.assign({}, state, {
        paths: action.paths
      })
      break;
    case UPDATE_DATA:
      return Object.assign({}, state, {
        data: action.data
      })
    default:
      return state;
  }
}

export default appReducer;
