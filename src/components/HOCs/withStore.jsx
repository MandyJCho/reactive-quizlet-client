import { Provider } from 'react-redux';
import { createStore } from 'redux';

import rootReducer from '../../reducers/root';
import generateHOC from './generateHOC';

// eslint-disable-next-line prefer-const
let store = createStore(rootReducer);

export default function withStore(Component, innerProps) {
  return generateHOC(Provider, { store }, Component, innerProps);
}
