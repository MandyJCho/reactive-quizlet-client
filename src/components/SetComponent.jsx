import React from 'react';
import PropTypes from 'prop-types';

import TextFormComponent from './TextFormComponent';

const propTypes = {
  studySet: PropTypes.shape({
    id: PropTypes.string,
    title: PropTypes.string,
  }),
};

export default function SetComponent(props) {
  const { title } = props.studySet;
  return (
    <div>
      {title}
      <TextFormComponent
        placeholder="Studyset, chapter, unit"
        formTitle="Header"
        value={title}
      />
    </div>
  );
}

SetComponent.propTypes = propTypes;

