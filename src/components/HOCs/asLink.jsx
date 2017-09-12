import React from 'react';
import { Link } from 'react-router-dom';

export default function asLink(component, to) {
  return (
    <Link to={to} style={{ backgroundColor: 'blue' }}> {component} </Link>
  );
}
