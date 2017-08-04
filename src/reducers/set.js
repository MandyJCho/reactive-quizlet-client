import _ from 'lodash';
import { Immutable } from 'seamless-immutable';

import uuid from 'uuid/v1';

import SetAction from '../actions/setActions';

const defaultState = {};
const namespace = 'SET/';
const addSet = (state = defaultState, action) =>
  (_.merge({}, Immutable(state), { [uuid()]: action.payload }));

const updateSet = (state = defaultState, action) =>
  (_.merge({}, Immutable(state), action.payload));

const deleteSet = (state = defaultState, action) =>
  (_.omit({}, Immutable(state), action.payload));

export default handleActions({
  [`${namespace}CREATE`]: addSet(state, SetAction),
  [`${namespace}UPDATE`]: updateSet(state, SetAction),
  [`${namespace}DELETE`]: deleteSet(state, SetAction),
});