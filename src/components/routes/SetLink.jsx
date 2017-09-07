import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const propTypes = {
  to: PropTypes.string,
  children: PropTypes.node,
};

export default function Link(props) {
  return (
    <Link to={props.to}>
      {props.children}
    </Link>
  );
}

Link.propTypes = propTypes;
