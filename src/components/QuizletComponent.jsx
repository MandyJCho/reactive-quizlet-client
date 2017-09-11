import React from 'react';

import HeaderComponent from './HeaderComponent';
import SetsContainer from '../containers/SetsContainer';

export default function Quizlet() {
  return (
    <div>
      <HeaderComponent title="Reactive Quizlet" />
      <SetsContainer />
    </div>
  );
}
