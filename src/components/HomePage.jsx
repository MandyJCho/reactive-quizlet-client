import React from 'react';

import HeaderComponent from '../components/HeaderComponent';
import SetLinkContainer from '../containers/SetLinkContainer';

export default function HomeComponent() {
  return (
    <div>
      <HeaderComponent title="Reactive Quizlet" />
      <SetLinkContainer />
    </div>
  );
}
