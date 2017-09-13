import _ from 'lodash';
import uuid from 'uuid/v1';
import shortid from 'shortid';

export function getIndex(id, list) {
  return list.findIndex(l => l.id === id);
}

export function addState(state, action) {
  return (_.concat(state, {
    id: uuid(),
    compKey: shortid.generate(),
    ...action.payload,
  }));
}

export function modifyState(state, action, types) {
  const newState = state;
  const index = getIndex(action.payload.id, newState);

  return action.type === types.UPDATE ?
    newState.splice(index, 1, action.payload)
    : newState.splice(index, 1);
}
