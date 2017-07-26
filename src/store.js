import { createStore } from 'redux';

import rootReducer from './reducers/reducers';

let store = createStore(rootReducer);

// eventually add hydration from server state
