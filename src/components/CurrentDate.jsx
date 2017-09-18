import React from 'react';
import moment from 'moment';

export default function Date(props) {
	function getDate() {
		var date = moment().format('dddd MMMM Do YYYY');
		return (
			<span>
				{' '}{date}{' '}
			</span>
		);
	}
	return (
		<div className="date">
			Today is: {getDate()}
		</div>
	);
}
