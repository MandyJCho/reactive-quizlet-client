import React from 'react';
import PropTypes from 'prop-types';
import asLink from './HOCs/asLink';
import SetComponent from './SetComponent';

const propTypes = {
  studySet: PropTypes.shape({
    title: PropTypes.string,
  }),
  to: PropTypes.string,
};

function SetPickerComponent(props) {
  const {title} = props.studySet;

  return (<div>{title}</div>);
}

SetPickerComponent.propTypes = propTypes;
export default asLink(SetComponent, SetPickerComponent);
