import _ from 'lodash';
import { Immutable } from 'seamless-immutable';
import uuid from 'uuid/v1';

import SET from '../actions/ActionTypes';


const defaultState = {};

const addSet = (state = defaultState, action) =>
  (_.merge({}, Immutable(state), { [uuid()]: action.payload }));

const updateSet = (state = defaultState, action) =>
  (_.merge({}, Immutable(state), action.payload));

const deleteSet = (state = defaultState, action) =>
  (_.omit({}, Immutable(state), action.payload));


export default function set(state, action) {
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
