import DENORM_STORE from './ActionTypes';

export function getDenormalizedState(entity) {
  return {
    type: DENORM_STORE,
    entity
  }
}
