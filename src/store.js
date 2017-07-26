import { createStore } from 'redux';

import rootReducer from './reducers/reducers';

let store = createStore(rootReducer);

// eventually add hydration from server state
import createSetAC from './actions/setActions';

console.log(store.getState());

store.dispatch(createSetAC('DRAGON'));