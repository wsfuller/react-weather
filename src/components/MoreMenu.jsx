import React from 'react';
import config from '../helpers/config.js';
import IconButton from 'material-ui/IconButton';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import Divider from 'material-ui/Divider';

import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';

export default function MoreMenu(props) {
	return (
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
			<MenuItem
				primaryText="GitHub"
				href="https://github.com/wsfuller/react-weather"
				target="_blank"
			/>
		</IconMenu>
	);
}
