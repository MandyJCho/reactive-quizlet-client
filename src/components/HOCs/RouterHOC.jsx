import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

export default function RouterHOC(Component, configs) {
  let Wrapper = () => (
    <Router>
      <Component Component, configs/>
    </Router>
  );
}