import _ from 'lodash';
import uuid from 'uuid/v1';
import shortid from 'shortid';

import { SET } from '../actions/ActionTypes';

const defaultState = [];

function getIndex(setID, sets) {
  return sets.findIndex(s => s.setID === setID);
}

function addSet(state = defaultState, action) {
  return (_.concat(state, {
    setID: uuid(),
    key: shortid.generate(),
    title: action.payload.trim(),
  }));
}

const modifySet = (state = defaultState, action) => {
  const newState = state;
  const index = getIndex(action.payload.id, newState);

  return action.type === SET.UPDATE ?
    newState.splice(index, 1, action.payload)
    : newState.splice(index, 1);
};


export default function set(state = defaultState, action) {
  let nextState;
  switch (action.type) {
    case (SET.CREATE):
      nextState = addSet(state, action);
      break;
    case (SET.UPDATE):
    case (SET.DELETE):
      nextState = modifySet(state, action);
      break;
    default:
      nextState = state;
  }

  // console.log(`nextState: ${JSON.stringify(nextState)}`);
  return nextState;
}
