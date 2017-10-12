import React from 'react';
import ReactRouterPropTypes from 'react-router-prop-types';

import SetController from '../containers/controllers/SetController';
import CardsContainer from '../containers/CardsContainer';

const propTypes = {
  location: ReactRouterPropTypes.location,
};

export default function EditPage(props) {
  const id = props.location.state;

  return (
    <div>
      <SetController />
      <CardsContainer owner={id || null} />
    </div>
  );
}

EditPage.propTypes = propTypes;
