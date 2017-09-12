import React from 'react';
import ReactDOM from 'react-dom';
import injectTapEventPlugin from 'react-tap-event-plugin';

import withStore from './components/HOCs/withStore';
import Routes from './components/Routes';

const Quizlet = withStore(Routes);

injectTapEventPlugin();
const mount = document.getElementById('root');

ReactDOM.render(<Quizlet />, mount);
