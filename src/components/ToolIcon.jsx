import React from 'react';

export default function ToolIcon(props) {
	return (
		<div className="tool-icon">
			<h3 className="tool-icon-title">
				{props.toolName}
			</h3>
			<img src={props.image} />
		</div>
	);
}
