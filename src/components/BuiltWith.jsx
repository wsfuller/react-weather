import React from 'react';
import Paper from 'material-ui/Paper';
import ToolIcon from './ToolIcon.jsx';
import { red500 } from 'material-ui/styles/colors';
import Heart from 'material-ui/svg-icons/action/favorite.js';

const openWeather = require('../assets/images/icons/tools/open-weather-map-orange.svg');
const googleDevs = require('../assets/images/icons/tools/google-developers.svg');
const react = require('../assets/images/icons/tools/react.svg');
const redux = require('../assets/images/icons/tools/redux.svg');
const webpack = require('../assets/images/icons/tools/webpack.svg');
const nodeSass = require('../assets/images/icons/tools/node-sass.svg');
const materialUI = require('../assets/images/icons/tools/material-ui.svg');
const babel = require('../assets/images/icons/tools/babel.svg');

export default function BuildWith(props) {
	return (
		<section>
			<Paper className="container">
				<div className="row">
					<div className="col-xs-12 text-center">
						<h1 className="section-title">
							Built With
							<span className="section-title-icon">
								<Heart color={red500} />
							</span>Using
						</h1>
					</div>
				</div>
				<div className="row around-xs">
					<div className="col-xs-6">
						<ToolIcon image={openWeather} toolName="Open Weather API" />
					</div>
					<div className="col-xs-6">
						<ToolIcon image={googleDevs} toolName="Google Maps API" />
					</div>
				</div>
				<div className="row around-xs">
					<div className="col-xs-6 col-sm-4 col-md-3 ">
						<ToolIcon image={react} toolName="React" />
					</div>
					<div className="col-xs-6 col-sm-4 col-md-3 ">
						<ToolIcon image={redux} toolName="Redux" />
					</div>
					<div className="col-xs-6 col-sm-4 col-md-3 ">
						<ToolIcon image={webpack} toolName="Webpack" />
					</div>
					<div className="col-xs-6 col-sm-4  col-md-3 ">
						<ToolIcon image={materialUI} toolName="Material-UI" />
					</div>
					<div className="col-xs-6 col-sm-4 col-md-3 ">
						<ToolIcon image={nodeSass} toolName="Node Sass" />
					</div>
					<div className="col-xs-6 col-sm-4 col-md-3 ">
						<ToolIcon image={babel} toolName="Babel" />
					</div>
				</div>
			</Paper>
		</section>
	);
}
