import SET from './ActionTypes';

// Action Creators
export function createSetAC(title) {
  return {
    type: SET.CREATE_SET,
    title
  };
}

export function updateSetAC(id, newTitle) {
  return {
    type: SET.UPDATE_SET,
    id,
    newTitle,
  };c
}

export function deleteSetAC(id) {
  return {
    type: SET.DELETE_SET,
    id,
  };
}
