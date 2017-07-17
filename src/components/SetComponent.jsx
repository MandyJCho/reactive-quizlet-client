import React from 'react';
import PropTypes from 'prop-types';

// import DeckContainer from './containers/DeckContainer';

const propTypes = {
  children: PropTypes.string,
  name: PropTypes.string,
  cards: PropTypes.arrayOf(PropTypes.shape({
    term: PropTypes.string,
    definition: PropTypes.string,
  })),
};

const defaultProps = {
  name: 'Study Set Name',
  cards: [{ term: 'term', definition: 'definition' }],
};

export default function StudySetComponent(props) {
  return (
    <div>{props.name}</div>
  );
}

StudySetComponent.propTypes = propTypes;
StudySetComponent.defaultProps = defaultProps;
