


export default createActions({
  SET: {
    CREATE: title => title,
    UPDATE: (id, newTitle) => { id, newTitle},
    DELETE: id => id,
  },
});
