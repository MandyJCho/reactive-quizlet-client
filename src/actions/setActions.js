import { createActions } from 'redux-action';

import CRUD from './ActionTypes';

export const set = createActions({
  SET: {
    [CRUD.CREATE]: [
      title => title,
    ],
    [CRUD.UPDATE]: [
      (id, newTitle) => {id, newTitle},
    ],
    [CRUD.DELETE]: [
      id => id,
    ],
  },
});
