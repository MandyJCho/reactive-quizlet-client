import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export default function asLink(component) {
  const propTypes = {
    to: PropTypes.string.isRequired,
  };

  const WrapperLink = props => (
    <Link to={props.to} style={{ backgroundColor: 'pink' }} >
      {component}
    </Link>
  );

  WrapperLink.propTypes = propTypes;

  return WrapperLink;
}
