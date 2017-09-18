import React, { Component } from 'react';
import Paper from 'material-ui/Paper';
import MenuItem from 'material-ui/MenuItem';
import TextField from 'material-ui/TextField';
import SelectField from 'material-ui/SelectField';
import RaisedButton from 'material-ui/RaisedButton';

import States from '../helpers/states.js';
import CurrentDate from './CurrentDate.jsx';

export default class Search extends Component {
	constructor(props) {
		super(props);
		this.state = {
			selectState: 0,
			stateAbbr: '',
			city: '',
			error: ''
		};
	}
	handleSelectState = (e, index, value) => {
		e.preventDefault();
		this.setState({
			selectState: value,
			stateAbbr: Object.keys(States.states[value - 1]).toString().toLowerCase()
		});
	};
	handleCity = e => {
		this.setState({ city: e.target.value });
	};
	handleSubmit = e => {
		e.preventDefault();
		if (this.state.city === '' || this.state.selectState === 0) {
			this.setState({ error: 'This is required' });
			return false;
		} else {
			this.props.onSearch(this.state.city, this.state.stateAbbr);
			this.setState({ selectState: 0, city: '', error: '' });
		}
	};
	render() {
		return (
			<section className="search">
				<Paper className="container">
					<div className="row">
						<div className="col-xs-12 col-sm-6 col-md-7">
							<form onSubmit={this.handleSubmit.bind(this)}>
								<div className="row">
									<div className="col-xs-12 col-sm-6 col-md-8">
										<TextField
											hintText="Enter a City Name"
											floatingLabelText="City"
											type="text"
											fullWidth={true}
											value={this.state.city}
											onChange={this.handleCity}
											errorText={this.state.error}
										/>
									</div>
									<div className="col-xs-12 col-sm-6 col-md-4">
										<SelectField
											floatingLabelText="Select State"
											value={this.state.selectState}
											onChange={this.handleSelectState}
											errorText={this.state.error}
											fullWidth={true}
										>
											<MenuItem value={0} primaryText="Select State" />
											{Object.values(States.states).map((state, index) => {
												return (
													<MenuItem
														value={index + 1}
														key={index + 1}
														primaryText={Object.keys(state)}
													/>
												);
											})}
										</SelectField>
									</div>
								</div>
								<div className="row end-xs">
									<div className="col-xs-12">
										<RaisedButton label="Search" primary={true} onClick={this.handleSubmit} />
									</div>
								</div>
							</form>
						</div>
						<div className="col-xs-12 col-sm-6 col-md-5">
							<CurrentDate />
						</div>
					</div>
				</Paper>
			</section>
		);
	}
}
