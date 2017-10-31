import React from 'react';
import ReactRouterPropTypes from 'react-router-prop-types';

import SetController from '../containers/controllers/SetController';
import CardsContainer from '../containers/CardsContainer';
import ButtonComponent from './ButtonComponent';

const propTypes = {
  location: ReactRouterPropTypes.location,
};

export default function EditPage(props) {
  const id = props.location.state;

  return (
    <div>
      <SetController />
      <ButtonComponent onClick={() => {}} text="Delete" />
      <CardsContainer owner={id || null} />
    </div>
  );
}

EditPage.propTypes = propTypes;
