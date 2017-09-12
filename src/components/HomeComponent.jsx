import React from 'react';

import HeaderComponent from '../components/HeaderComponent';
import SetsContainer from '../containers/SetsContainer';

export default function HomeComponent() {
  return (
    <div>
      <HeaderComponent title="Reactive Quizlet" />
      <SetsContainer />
    </div>
  );
}

// wrap routes in store and router
// create home component and link it via there
