import React from 'react';
import store from './redux/store.js';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

import { Fabric } from '@fluentui/react';
import { initializeIcons } from '@uifabric/icons';

import App from './components/App';

initializeIcons();

ReactDOM.render(
  <Provider store={store}>
    <Fabric>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Fabric>
  </Provider>,
  document.getElementById('root')
);
