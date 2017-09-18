import React from 'react';
import CircularProgress from 'material-ui/CircularProgress';

export default function MainStat(props) {
	return (
		<div className="main-stat">
			<CircularProgress
				mode="determinate"
				value={props.value}
				max={props.maxValue}
				size={115}
				thickness={props.progressBar == false ? 0 : 3}
			/>
			<div className="main-stat-value">
				{props.value}
				{props.unitOfMeasure}
			</div>
			<div className="main-stat-title">
				{props.title}
			</div>
		</div>
	);
}
