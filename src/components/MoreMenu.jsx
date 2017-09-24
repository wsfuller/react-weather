import React, { Component } from 'react';
import config from '../helpers/config.js';
import IconButton from 'material-ui/IconButton';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import Divider from 'material-ui/Divider';
import Dialog from 'material-ui/Dialog';

import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';

export default class MoreMenu extends Component {
	state = {
		open: false
	};
	handleOpen = () => {
		this.setState({ open: true });
	};
	handleClose = () => {
		this.setState({ open: false });
	};
	render() {
		return (
			<div>
				<IconMenu
					iconButtonElement={
						<IconButton iconStyle={{ color: '#fff' }}>
							<MoreVertIcon />
						</IconButton>
					}
					targetOrigin={{ horizontal: 'right', vertical: 'top' }}
					anchorOrigin={{ horizontal: 'right', vertical: 'top' }}
				>
					<MenuItem primaryText={config.APPLICATION_VERSION} disabled={true} />
					<Divider />
					<MenuItem primaryText="GitHub" href={config.GITHUB_REPO} target="_blank" />
					<MenuItem primaryText="About" onClick={this.handleOpen} />
				</IconMenu>
				<Dialog
					title="About ReactWeather"
					modal={false}
					open={this.state.open}
					onRequestClose={this.handleClose}
				>
					ReactWeather is an educational tool used to display weather using the
					<a href="https://openweathermap.org/api" target="_blank" style={{ marginLeft: 5 }}>
						OpenWeatherMap API
					</a>. Using modern application tools React, Redux, Webpack, Babel, etc. ReactWeather is
					meant to to allow users to search and return weather updates that are accurate to around 2
					hours. So give ReactWeather a try, if there are any suggestions, errors, or improvements
					please feel free to head over to the <a href={config.GITHUB_REPO}>GitHub Repo</a> and
					submit an issue
				</Dialog>
			</div>
		);
	}
}
