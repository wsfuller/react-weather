import React from 'react';
import { useSelector } from 'react-redux';
import isEmpty from 'lodash/isEmpty';
import GoogleMapReact from 'google-map-react';

import { Text, Spinner, SpinnerSize, getTheme } from '@fluentui/react';

import mapOptions from './mapOptions';
import MapMarker from './MapMarker';

function WeatherMap() {
  const theme = getTheme();

  const { forecast, error, loading } = useSelector((state) => state.weather);

  let content;

  if (!isEmpty(forecast)) {
    const mapCenter = {
      center: {
        lat: forecast?.coord?.lat,
        lng: forecast?.coord?.lon,
      },
      zoom: 12,
    };
    content = (
      <GoogleMapReact
        boostrapURLKeys={{ key: process.env.REACT_APP_GOOGLE_MAPS_KEY }}
        center={mapCenter.center}
        defaultZoom={mapCenter.zoom}
        options={mapOptions}>
        <MapMarker
          lat={mapCenter.center.lat}
          lng={mapCenter.center.lng}
          text="My Marker"
        />
      </GoogleMapReact>
    );
  } else if (error) {
    content = <Text>Error Fetching Weather Details</Text>;
  } else if (loading) {
    content = (
      <Spinner
        size={SpinnerSize.large}
        label="Loading weather map..."
        style={{
          marginTop: theme.spacing.m,
        }}
      />
    );
  }

  return <div style={{ width: '100%', height: '100%' }}>{content}</div>;
}

export default WeatherMap;
