import React, { Fragment } from 'react';

import { Stack } from '@fluentui/react';

import SearchBar from '../components/SearchBar';
import WeatherPanel from '../components/WeatherPanel';
import WeatherMap from '../components/WeatherMap';

function Home() {
  return (
    <Fragment>
      <SearchBar />
      <div style={{ position: 'relative', width: '100%', height: '100%' }}>
        <Stack horizontal style={{ height: '100%', width: '100%' }}>
          <Stack.Item>
            <WeatherPanel />
          </Stack.Item>
          <Stack.Item grow={1}>
            <WeatherMap />
          </Stack.Item>
        </Stack>
      </div>
    </Fragment>
  );
}

export default Home;
