// Action type
export const CRUD = {
  CREATE_SET: 'CREATE_SET',
  UPDATE_SET: 'UPDATE_SET',
  DELETE_SET: 'DELETE_SET',
};

// Action Creators
export function createSetAC(setName) {
  return {
    type: CRUD.CREATE_SET,
    setName,
  };
}

export function updateSetAC(setID, updatedSet) {
  return {
    type: CRUD.UPDATE_SET,
    setID,
    updatedSet,
  };
}

export function deleteSetAC(setID) {
  return {
    type: CRUD.DELETE_SET,
    setID,
  };
}
