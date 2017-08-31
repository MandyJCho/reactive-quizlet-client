import _ from 'lodash';
import uuid from 'uuid/v1';

import { SET } from '../actions/ActionTypes';

const defaultState = [];

function getIndex(id, sets) {
  return sets.findIndex(s => s.id === id);
}

function addSet(state = defaultState, action) {
  return (_.concat(state, {
    id: uuid(),
    title: action.payload,
  }));
}

const updateSet = (state = defaultState, action) => {
  const newState = state;
  const index = getIndex(action.payload.id, newState);
  return newState.splice(index, 1, action.payload);
};

const deleteSet = (state = defaultState, action) => {
  const newState = state;
  const index = getIndex(action.payload.id, newState);

  return newState.splice(index, 1);
};

export default function set(state = defaultState, action) {
  let nextState;
  switch (action.type) {
    case (SET.CREATE):
      nextState = addSet(state, action);
      break;
    case (SET.UPDATE):
      nextState = updateSet(state, action);
      break;
    case (SET.DELETE):
      nextState = deleteSet(state, action);
      break;
    default:
      nextState = state;
  }

  return nextState;
}
