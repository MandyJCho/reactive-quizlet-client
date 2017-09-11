import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import injectTapEventPlugin from 'react-tap-event-plugin';


import HeaderComponent from './components/HeaderComponent';
import SetsContainer from './containers/SetsContainer';
import rootReducer from './reducers/root';

injectTapEventPlugin();
// eslint-disable-next-line prefer-const
let store = createStore(rootReducer);

const mount = document.getElementById('root');

export default function Quizlet() {
  return (
    <Provider store={store} >
      <div>
        <HeaderComponent title="Reactive Quizlet" />
        <SetsContainer />
      </div>
    </Provider>
  );
}

ReactDOM.render(<Quizlet />, mount);
