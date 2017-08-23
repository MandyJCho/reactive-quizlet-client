import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import injectTapEventPlugin from 'react-tap-event-plugin';

import lightBaseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

import HeaderComponent from './components/HeaderComponent';
import StudySetsContainer from './containers/SetsContainer';
import rootReducer from './reducers/root';

injectTapEventPlugin();
// eslint-disable-next-line prefer-const
let store = createStore(rootReducer);

// initial state
console.log(store.getState());

const mount = document.getElementById('root');

function Quizlet() {
  return (
    <Provider store={store} >
      <div>
        <HeaderComponent
          muiTheme={getMuiTheme(lightBaseTheme)}
          title="Reactive Quizlet"
          showMenuIconButton={false}
        />

        <StudySetsContainer />
      </div>
    </Provider>
  );
}

ReactDOM.render(<Quizlet />, mount);
