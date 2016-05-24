import 'babel-polyfill'
import 'bootstrap/dist/css/bootstrap.css';
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import store from './reducers/store';
import Macros from './components/Macros';

render(
  <Provider store={store}>
    <Macros />
  </Provider>,
  document.getElementById('root')
)
