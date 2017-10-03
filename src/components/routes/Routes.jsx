import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  // Switch,
} from 'react-router-dom';

import HomeComponent from '../HomeComponent';
// import SetRoutes from './SetRoutes';
import SetComponent from '../SetComponent';
import Graphi from '../../server/Graphi';

export default function Routes() {
  return (
    <Router>
      <div>
        <Route exact path="/" component={HomeComponent} />
        <Route path="/:id/:routes" component={SetComponent} />
        <Route path='/gql' component={Graphi} />
      </div>
    </Router>
  );
}
