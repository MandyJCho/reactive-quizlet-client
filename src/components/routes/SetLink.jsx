import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import getFlashcardLink from '../../utils/getFlashcardLink';
import SetComponent from '../SetComponent';

const propTypes = {
  to: PropTypes.string,
  children: PropTypes.node,
};

export default function SetLink(props) {
  const toLink = getFlashcardLink(props.studySet);
  const {title, id} = props.studySet;
  return (
    <Link to={toLink}>
      <SetComponent title={title} id={id} />
    </Link>
  );

}
