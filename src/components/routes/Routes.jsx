import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';

import Home from '../index';

export default function routes() {
  return (
    <Router>
      <Switch>
        <Route exact path="/latest" component={Home} />
        <Route path="/:id/:name" component={'add abstract component here'} />
      </Switch>
    </Router>
  );
}
