// Action type
const CRUD = {
  CREATE_SET: 'CREATE_SET',
  UPDATE_SET: 'UPDATE_SET',
  DELETE_SET: 'DELETE_SET',
};

// Action Creators
function createSetAC(setName) {
  return {
    type: CRUD.CREATE_SET,
    setName,
  };
}

function updateSetAC(setID, updatedSet) {
  return {
    type: CRUD.UPDATE_SET,
    setID,
    updatedSet,
  };
}

function deleteSetAC(setID) {
  return {
    type: CRUD.DELETE_SET,
    setID,
  };
}

export { CRUD, createSetAC, updateSetAC, deleteSetAC };
