import React from 'react';
import ReactDOM from 'react-dom';

function Test() {
  return (
    <div>Hello</div>
  );
}

const mount = document.getElementById('root');

ReactDOM.render(<Test />, mount, () => alert('Mounted'));
