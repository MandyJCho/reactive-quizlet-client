import { createStore } from 'redux';

import actionCreators from './actions/ActionCreators';
import rootReducer from './reducers/reducers';

let store = createStore(rootReducer);

// initial state
console.log(store.getState());
