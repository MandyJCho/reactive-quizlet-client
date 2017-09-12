import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  studySet: PropTypes.shape({
    title: PropTypes.string,
    urlKey: PropTypes.string,
  }),
};

export default function SetComponent(props) {
  const { title, urlKey } = props.studySet;
  return (
    <div>
      {title} {urlKey}
    </div>
  );
}

SetComponent.propTypes = propTypes;
