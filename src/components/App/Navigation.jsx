import React from 'react';

import { Toggle } from '@fluentui/react';

function AppNavigation() {
  return (
    <header>
      <div className="app-name">React Weather</div>
      <div>SEARCH</div>
      <div>
        <Toggle
          label="Theme"
          onText="Disable Dark Mode"
          offText="Enable Dark Mode"
        />
      </div>
    </header>
  );
}

export default AppNavigation;
