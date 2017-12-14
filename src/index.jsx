import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import QFileBrowser from './components/App';
// import reducers from './reducers';

// let store = createStore(reducers);

render (
  // <Provider store={store}>
    <QFileBrowser />,
  // </Provider>,
  document.getElementById('root')
)
