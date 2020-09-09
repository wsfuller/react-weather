import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchWeather } from '../actions/weatherActions.js';

import Search from '../components/Search.jsx';
import SearchResults from '../components/SearchResults.jsx';

class SearchContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchQuery: 'san francisco, US',
    };
  }
  componentDidMount() {
    this.props.fetchWeather(this.state.searchQuery);
  }

  handleSearch = (city, state) => {
    var newSearchQuery = city + ',US';
    this.setState({ searchQuery: newSearchQuery }, function () {
      this.props.fetchWeather(this.state.searchQuery);
    });
  };
  render() {
    let { weather } = this.props;
    return (
      <div>
        <Search onSearch={this.handleSearch} />
        <SearchResults results={weather} />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    weather: state.weather.weather,
    fetchingWeather: state.weather.loading,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    actions: bindActionCreators(fetchWeather, dispatch),
    fetchWeather: (query) => dispatch(fetchWeather(query)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SearchContainer);
