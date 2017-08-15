import { createStore } from 'redux';

import rootReducer from './reducers/reducers';

let store = createStore(rootReducer);

// initial state
console.log(store.getState());

export default store;
