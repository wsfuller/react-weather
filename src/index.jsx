import React from 'react';
import store from './redux/store.js';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

import { initializeIcons } from '@uifabric/icons';

import './index.css';
import App from './components/App';

initializeIcons();

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);
