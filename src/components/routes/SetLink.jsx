import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import getFlashcardLink from '../../utils/getFlashcardLink';
import SetComponent from '../SetComponent';

const propTypes = {
  studySet: PropTypes.shape({
    title: PropTypes.string,
    id: PropTypes.string,
  }),
};

export default function SetLink(props) {
  const toLink = getFlashcardLink(props.studySet);
  const { title, id } = props.studySet;
  return (
    <Link to={toLink}>
      <SetComponent title={title} id={id} />
    </Link>
  );
}

SetLink.propTypes = propTypes;
