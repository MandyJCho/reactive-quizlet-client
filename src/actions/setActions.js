import SET from './ActionTypes';
import setType from '../utils/setType';


export function addSet(payload) {
  return setType(payload, SET.CREATE);
}

export function updateSet(payload) {
  return setType(payload, SET.UPDATE);
}

export function deleteSet(payload) {
  return setType(payload, SET.DELETE);
}
