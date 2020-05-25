// require('./index.scss');
import React from 'react';
import store from './redux/store.js';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { Fabric } from "@fluentui/react";

// initializeIcons();

// import injectTapEventPlugin from 'react-tap-event-plugin';
// const tapEventPlugin = require('react-tap-event-plugin')();
// import getMuiTheme from 'material-ui/styles/getMuiTheme';
// import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

// const muiTheme = getMuiTheme({
// 	palette: {
// 		primary1Color: '#00a699'
// 	}
// });

import App from './components/App/App.jsx';

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