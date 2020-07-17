import React from 'react';

import SearchBar from '../components/SearchBar';
import WeatherPanel from '../components/WeatherPanel';

function Home() {
  return (
    <div style={{ position: 'relative', width: '100%', height: '100%' }}>
      <SearchBar />
      <WeatherPanel />
    </div>
  );
}

export default Home;
