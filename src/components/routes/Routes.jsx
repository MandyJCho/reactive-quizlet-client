import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  // Switch,
} from 'react-router-dom';

import HomeComponent from '../HomeComponent';
import SetController from '../../containers/controllers/SetController';

export default function Routes() {
  return (
    <Router>
      <div>
        <Route exact path="/" component={HomeComponent} />
        <Route path="/:id/:routes" component={SetController} />
      </div>
    </Router>
  );
}
