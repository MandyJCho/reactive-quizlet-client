import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  title: PropTypes.string,
};

const defaultProps = {
  title: 'Study Set Name',
};

export default function StudySetComponent(props) {
  console.log(`${props.title} has rendered`);
  return (
    <div>
      <div>{props.title}</div>
    </div>
  );
}

StudySetComponent.propTypes = propTypes;
StudySetComponent.defaultProps = defaultProps;
