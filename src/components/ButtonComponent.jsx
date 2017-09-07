import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  onClick: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired,
};

const defaultProps = {
  text: '',
};

export default function ButtonComponent(props) {
  return (
    <div>
      <button backgroundColor="primary" onClick={props.onClick}>{props.text}</button>
    </div>
  );
}

ButtonComponent.propTypes = propTypes;
ButtonComponent.defaultProps = defaultProps;
