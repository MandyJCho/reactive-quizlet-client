import SET from './ActionTypes';

// Action Creators
export function createSetAC(setName) {
  return {
    type: SET.CREATE_SET,
    setName,
  };
}

export function updateSetAC(setID, updatedSet) {
  return {
    type: SET.UPDATE_SET,
    setID,
    updatedSet,
  };
}

export function deleteSetAC(setID) {
  return {
    type: SET.DELETE_SET,
    setID,
  };
}
