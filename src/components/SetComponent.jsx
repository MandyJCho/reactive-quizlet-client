import React from 'react';
import PropTypes from 'prop-types';

import FlashcardContainer from '../containers/CardsContainer';
import getFlashcardLink from '../utils/getFlashcardLink';
import withLink from '../components/HOCs/withLink';

const propTypes = {
  studySet: PropTypes.shape({
    title: PropTypes.string,
    urlKey: PropTypes.string,
  }),
};

export default function SetComponent(props) {
  const to = getFlashcardLink(props.studySet);
  const { title, urlKey } = props.studySet;
  return (
    <div>
      {title} {urlKey}
      {withLink(FlashcardContainer, to)}
    </div>
  );
}

SetComponent.propTypes = propTypes;
