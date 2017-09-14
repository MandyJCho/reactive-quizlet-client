import React from 'react';
import { Switch, Route } from 'react-router-dom';
import SetsContainer from '../../containers/SetsContainer';
import CardsContainer from '../../containers/CardsContainer';

export default function SetRoutes() {
  return (
    <div>
      <Switch>
        <Route exact path="/:id/" component={SetsContainer} />
        <Route path="/id:/:name" component={CardsContainer} />
      </Switch>
    </div>
  );
}

// IMPORTANT FIX - Have link go to a component of routes on the sets
// container instead of set components
