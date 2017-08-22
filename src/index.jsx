import React from 'react';
import ReactDOM from 'react-dom';
import Provider from 'react-redux';
import { createStore } from 'redux';

import lightBaseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

import HeaderComponent from './components/HeaderComponent';
import StudySetsContainer from './containers/SetsContainer';
import rootReducer from './reducers/reducers';

// eslint-disable-next-line prefer-const
let store = createStore(rootReducer);

// initial state
console.log(store.getState());

const mount = document.getElementById('root');

function Quizlet() {
  return (
    <Provider store={store} >
      <HeaderComponent
        muiTheme={getMuiTheme(lightBaseTheme)}
        title="Reactive Quizlet"
        showMenuIconButton={false}
      />

      <StudySetsContainer />
    </Provider>
  );
}

ReactDOM.render(<Quizlet />, mount);
