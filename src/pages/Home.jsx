import React from 'react';

import { Stack } from '@fluentui/react';

import SearchBar from '../components/SearchBar';
import WeatherPanel from '../components/WeatherPanel';
import WeatherMap from '../components/WeatherMap';

function Home() {
  return (
    <Stack as="article" style={{ height: '100%' }}>
      <SearchBar />
      <Stack
        horizontal
        styles={{
          root: { position: 'relative', height: '100%', width: '100%' },
        }}>
        <WeatherPanel />
        <Stack.Item grow={1}>
          <WeatherMap />
        </Stack.Item>
      </Stack>
    </Stack>
  );
}

export default Home;
