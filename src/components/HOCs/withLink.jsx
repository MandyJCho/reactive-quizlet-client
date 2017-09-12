import React from 'react';
import { Link } from 'react-router-dom';

export default function withLink(component, to) {
  let Wrapper = () => (
    <div>
      <Link to={to} style={{ backgroundColor: 'blue' }}>
        test
        {component}
      </Link>
    </div>
  );

  return Wrapper;
}
