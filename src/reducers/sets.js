import _ from 'lodash';
import { Immutable } from 'seamless-immutable';
import { handleActions } from 'redux-actions';
import uuid from 'uuid/v1';

import SET from '../actions/ActionTypes';

const defaultState = {};

function addSet(state = defaultState, action) {
  let initialState = Immutable(state);
  return _.assign;
}

function updateSet

export default set = handleActions({
  [SET.CREATE]: addSet(state, action),
  [SET.UPDATE]:
});
