import _ from 'lodash';
import { Immutable } from 'seamless-immutable';
import { handleActions } from 'redux-actions';
import uuid from 'uuid/v1';

import { set as setAction} from '../actions/setActions';

const defaultState = {};
const namespace = 'SET';

const addSet = (state = defaultState, action) =>
  (_.assign(Immutable(state), { [uuid()]: action.payload }));

const updateSet = (state = defaultState, action) =>
  (_.assign(Immutable(state), action.payload));

const deleteSet = (state = defaultState, action) =>
  (_.omit(Immutable(state), action.payload));

export default Set = handleActions({
    [`${namespace}/CREATE`] : addSet(state, action),
    [`${namespace}/UPDATE`] : updateSet(state, action),
    [`${namespace}/DELETE`] : deleteSet(state, action),
  });
