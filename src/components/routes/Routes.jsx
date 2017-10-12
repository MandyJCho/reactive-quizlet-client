import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';

import HomeComponent from '../HomePage';
import EditPage from '../EditPage';

export default function Routes() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={HomeComponent} />
        <Route path="/:id" component={EditPage} />
      </Switch>
    </Router>
  );
}
