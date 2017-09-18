require('./index.scss');
import React from 'react';
import store from './store.js';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

import injectTapEventPlugin from 'react-tap-event-plugin';
const tapEventPlugin = require('react-tap-event-plugin')();
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

// const muiTheme = getMuiTheme({
// 	palette: {
// 		primary1Color: '#00a699'
// 	}
// });

import App from './containers/App.jsx';

ReactDOM.render(
	<Provider store={store}>
		{/* <MuiThemeProvider muiTheme={muiTheme}> */}
		<MuiThemeProvider>
			<BrowserRouter>
				<App />
			</BrowserRouter>
		</MuiThemeProvider>
	</Provider>,
	document.getElementById('root')
);
