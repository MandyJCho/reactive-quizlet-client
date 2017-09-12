import React from 'react';
import { Link } from 'react-router-dom';

export default function withLink(component, to) {
  let Wrapper = () => (
    <Link to={to} style={{ backgroundColor: 'blue' }}>
      test{component}
    </Link>
  );

  return Wrapper;
}
