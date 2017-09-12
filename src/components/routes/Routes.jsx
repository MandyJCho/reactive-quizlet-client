import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  // Switch,
} from 'react-router-dom';

import HomeComponent from '../HomeComponent';
import SetRoutes from './SetRoutes';

export default function Routes() {
  return (
    <Router>
      <div>
        <Route exact path="/" component={HomeComponent} />
        <Route path="/:id" component={SetRoutes} />
      </div>
    </Router>
  );
}
