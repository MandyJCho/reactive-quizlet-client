import React from 'react';
import ReactDOM from 'react-dom';

import withStore from './components/HOCs/withStore';
import Routes from './components/routes/Routes';

const Quizlet = withStore(Routes);

const mount = document.getElementById('root');

ReactDOM.render(<Quizlet />, mount);
