import React from 'react';
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';

import Home from '../index';


export default function routes() {
  return (
    <Router>
      <Route exact path="/" component={Home} />
      <Route path="/:id/:name" component={'add abstract component here'} />
    </Router>
  );
}
