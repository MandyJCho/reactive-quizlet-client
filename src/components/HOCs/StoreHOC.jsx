import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import rootReducer from '../../reducers/root';

// eslint-disable-next-line prefer-const
let store = createStore(rootReducer);

export default function StoreHOC(Component, configs) {
  let Wrapper = () => (
    <Provider store={store} >
      <Component {...configs} />
    </Provider>
  );

  return <Wrapper />;
}
