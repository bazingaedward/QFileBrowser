import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import QFileBrowser from './App'
import appReducer from './reducers'
import { changeDirectory } from './actions'

let store = createStore(appReducer);

render (
  <Provider store={store}>
    <QFileBrowser />
  </Provider>,
  document.getElementById('root')
)
