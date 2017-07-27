import { createActions } from 'redux-action';

import SET from './ActionTypes';

export const setActionCreators = createActions({
  SET: {
    [SET.CREATE_SET]: [
      title => title,
      // META
    ],
    [SET.UPDATE_SET]: [
      (id, newTitle) => {id, newTitle},
    ],
    [SET.DELETE_SET]: [

    ],
  },
});

// Action Creators
export function createSetAC(title) {
  return {
    type: SET.CREATE_SET,
    title,
  };
}

export function updateSetAC(id, newTitle) {
  return {
    type: SET.UPDATE_SET,
    id,
    newTitle,
  };
}

export function deleteSetAC(id) {
  return {
    type: SET.DELETE_SET,
    id,
  };
}
