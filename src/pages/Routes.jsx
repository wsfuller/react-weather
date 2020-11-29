import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from './Home';
import Help from './Help';
import NotFound from './NotFound';

function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/help" exact component={Help} />
      <Route path="*" component={NotFound} />
    </Switch>
  );
}

export default Routes;
