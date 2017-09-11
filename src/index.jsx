import React from 'react';
import ReactDOM from 'react-dom';
import injectTapEventPlugin from 'react-tap-event-plugin';

import StoreHOC from './components/HOCs/StoreHOC';

injectTapEventPlugin();

const mount = document.getElementById('root');

export default function Root() {
  return (
    <StoreHOC />
  );
}

ReactDOM.render(<Quizlet />, mount);
