import React from 'react';
import ReactDOM from 'react-dom';
import injectTapEventPlugin from 'react-tap-event-plugin';

import HeaderComponent from './components/HeaderComponent';
import SetsContainer from './containers/SetsContainer';
import withRouter from './components/HOCs/withRouter';
import withStore from './components/HOCs/withStore';

function Root() {
  return (
    <div>
      <HeaderComponent title="Reactive Quizlet" />
      <SetsContainer />
    </div>
  );
}

const Quizlet = withStore(withRouter(Root));

injectTapEventPlugin();
const mount = document.getElementById('root');

ReactDOM.render(<Quizlet />, mount);
