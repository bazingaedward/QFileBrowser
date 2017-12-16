import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import QFileBrowser from './components/App';
import appReducer from './reducers';
import * as actions from './actions';

let store = createStore(appReducer);

// let unsubscribe = store.subscribe(() =>
//   console.log(store.getState())
// )

store.dispatch(actions.refreshDirectory('/hello/world'))
console.log(store.getState())

render (
  <Provider store={store}>
    <QFileBrowser />
  </Provider>,
  document.getElementById('root')
)
