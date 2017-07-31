import { createStore } from 'redux';

import actionCreators from './actions/ActionCreators';
import rootReducer from './reducers/reducers';

let store = createStore(rootReducer);

// initial state
console.log(store.getState());

// eventually add hydration from server state
export default function add() {
  store.dispatch(actionCreators.SET.CREATE('DRAGON'));
  console.log(store.getState());
};