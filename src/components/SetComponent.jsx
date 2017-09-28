import React from 'react';
import PropTypes from 'prop-types';

import CardsContainer from '../containers/CardsContainer';
import TextFormComponent from './TextFormComponent';

const propTypes = {
  studySet: PropTypes.shape({
    id: PropTypes.string,
    title: PropTypes.string,
  }),
};

export default class SetComponent {
  componentDidMount(){

  }

  render() {
    const {id, title} = props.studySet;
    return (
      <div>
        {title}
        <TextFormComponent
          placeholder="Studyset, chapter, unit"
          formTitle="Header"
          value={title}
        />
        <CardsContainer owner={id} />
      </div>
    );
  }
}

SetComponent.propTypes = propTypes;
