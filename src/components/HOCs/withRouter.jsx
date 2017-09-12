import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

export default function withRouter(Component, props) {
  const Wrapper = () => (
    <Router>
      <Component {...props} />
    </Router>
  );

  return Wrapper;
}
