const DENORM_STORE = 'DENORM_STORE';

function getDenormalizedState(entity) {
  return {
    type: DENORM_STORE,
    entity
  }
}

export { DENORM_STORE, getDenormalizedState };
