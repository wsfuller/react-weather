import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import AppBar from 'material-ui/AppBar';
import MoreMenu from './MoreMenu.jsx';
import Footer from './Footer.jsx';
// import IconButton from 'material-ui/IconButton';
// import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert.js';
import { Switch, Route } from 'react-router-dom';

import SearchContainer from '../containers/SearchContainer.jsx';
import BuiltWith from './BuiltWith.jsx';

import logo from '../assets/images/logos/react-weather-logo.svg';

export default class Layout extends Component {
	constructor(props) {
		super(props);
		this.state = {
			open: false
		};
	}
	handleToggle = () => this.setState({ open: !this.state.open });
	closeMenu = () => {
		this.setState({ open: false });
	};
	render() {
		const { app_name, searchedFor, weather } = this.props;
		return (
			<div className="layout">
				<AppBar
					className="app-bar"
					title={
						<div className="app-bar-branding">
							<img className="app-bar-logo" src={logo} />
							<div className="app-bar-name">
								{app_name}
							</div>
						</div>
					}
					showMenuIconButton={false}
					iconElementRight={<MoreMenu />}
				/>
				<SearchContainer />
				<BuiltWith />
				<Footer />
			</div>
		);
	}
}
