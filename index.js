import React from  'react';
import ReactDOM from 'react-dom';

const b = React.createElement('b', null, 'Test test test');
const mount = document.getElementById('app');

ReactDOM.render(b, mount, () => alert('rendered!'));