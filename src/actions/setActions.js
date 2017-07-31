import { createActions } from 'redux-actions';

export const set = createActions({
  SET: {
    CREATE: [
      title => title,
    ],
    UPDATE: [
      (id, newTitle) => {id, newTitle},
    ],
    DELETE: [
      id => id,
    ],
  },
});
