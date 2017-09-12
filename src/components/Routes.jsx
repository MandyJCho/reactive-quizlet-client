import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';

import HomeComponent from './HomeComponent';
import ButtonComponent from './ButtonComponent';
import SetsContainer from '../containers/SetsContainer';

export default function Routes() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={HomeComponent} />
        <Route path="/:id" component={SetsContainer} />
        <Route path="/button" component={ButtonComponent} />
      </Switch>
    </Router>
  );
}
