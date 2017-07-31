import _ from 'lodash';
import { Immutable } from 'seamless-immutable';
import { handleActions } from 'redux-actions';
import uuid from 'uuid/v1';

import SET from '../actions/ActionTypes';

const defaultState = {};

let addSet = (state = defaultState, action) =>
  (_.assign(Immutable(state), { [uuid()]: action.payload }));

let updateSet = (state = defaultState, action) =>
  ( _.assign(Immutable(state), action.payload));

let deleteSet = (state = defaultState, action) =>
  ( _.omit(Immutable(state), action.payload));

export default set = handleActions({
  [SET.CREATE]: addSet(state, action),
  [SET.UPDATE]: updateSet(state, action),
  [SET.DELETE]: deleteSet(state, action),
  defaultState,
});
