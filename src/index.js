/* React */
import React from 'react';
import ReactDOM from 'react-dom';

/* Components */
import AppContainer from './App/';
import './index.css';

/* Redux */
import { Provider } from 'react-redux';

/* Store */
import configureStore from './Redux/Store/';

let store = configureStore();

ReactDOM.render(
  <Provider store={store}>
    <AppContainer />
  </Provider>,
  document.getElementById('root')
);
