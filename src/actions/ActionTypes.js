import getNamespaceActions from '../utils/getNamespaceActions';

// CRUD
const CRUD = {
  CREATE: 'CREATE',
  READ: 'READ',
  UPDATE: 'UPDATE',
  DELETE: 'DELETE',
};

// Namespaces
export const SET = getNamespaceActions('SET', CRUD);

export const CARD = getNamespaceActions('CARD', CRUD);
CARD.DELETEALL = 'DELETEALL';
