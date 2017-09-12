import React from 'react';
import { Switch, Route } from 'react-router-dom';
import SetsContainer from '../../containers/SetsContainer';
import SetComponent from '../SetComponent';

export default function SetRoutes() {
  return (
    <div>
      <Switch>
        <Route exact path="/:id/" component={SetsContainer} />
        <Route path="/id:/:name" component={SetComponent} />
      </Switch>
    </div>
  );
}
