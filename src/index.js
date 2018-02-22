import React from 'react';
import { Provider } from 'react-redux';
import ReactDOM from 'react-dom';
import store from './store'
import Layout from './components/Layout'

ReactDOM.render(
  <Provider store={store}>
    <Layout />
  </Provider>,
  document.querySelector('.container'));
