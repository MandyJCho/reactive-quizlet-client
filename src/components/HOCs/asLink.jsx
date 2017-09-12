import React from 'react';
import { Link } from 'react-router-dom';

export default function asLink(component, to) {
  let Wrapper = () => (
    <Link to={to} style={{ backgroundColor: 'blue' }}>
      {component}
    </Link>
  );

  return Wrapper;
}
