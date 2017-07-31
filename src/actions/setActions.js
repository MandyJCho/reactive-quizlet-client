import { createActions } from 'redux-action';

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

console.log(set);