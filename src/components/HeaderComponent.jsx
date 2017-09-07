import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  title: PropTypes.string,
};

export default function HeaderComponent(props) {
  return (
    <div> {props.title} </div>
  );
}

HeaderComponent.propTypes = propTypes;
