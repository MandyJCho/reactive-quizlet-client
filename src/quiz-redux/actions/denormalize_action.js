const DENORM_STORE = 'DENORM_STORE';

function getDenormalizedState(order) {
  return {
    type: DENORM_STORE,
    order
  }
}

export { DENORM_STORE, getDenormalizedState };
