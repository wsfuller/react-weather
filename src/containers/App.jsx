import React, { Component } from 'react';
import { connect } from 'react-redux';
import Layout from '../components/Layout.jsx';
import Config from '../helpers/config.js';

class App extends Component {
	render() {
		return <Layout app_name={Config.APPLICATION_NAME} />;
	}
}

const mapStateToProps = state => {
	return {};
};

const mapDispatchToProps = dispatch => {
	return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
