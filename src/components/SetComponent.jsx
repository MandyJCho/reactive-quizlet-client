import React from 'react';
import PropTypes from 'prop-types';

import TextFormComponent from './TextFormComponent';

const propTypes = {
  id: PropTypes.string,
  title: PropTypes.string,
};

export default function SetComponent(props) {
  const { title, id } = props;
  console.log(id);
  return (
    <div>
      {title}
      <TextFormComponent
        placeholder="Studyset, chapter, unit"
        formTitle="Header"
        value={title}
        name="title"
      />
    </div>
  );
}

SetComponent.propTypes = propTypes;

