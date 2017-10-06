import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  // Switch,
} from 'react-router-dom';

import HomeComponent from '../HomeComponent';
import SetComponent from '../SetComponent';

export default function Routes() {
  return (
    <Router>
      <div>
        <Route exact path="/" component={HomeComponent} />
        <Route path="/:id/:routes" component={SetComponent} />
      </div>
    </Router>
  );
}
