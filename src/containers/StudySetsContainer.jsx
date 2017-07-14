import React from 'react';

import SetComponent from '../components/SetComponent';

export default class StudySetsContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      studySetsList: ['biology', 'chemistry', 'algorithms'],
    };
  }

  renderSetCards = () => this.state.studySetsList.map(studySet =>
    <SetComponent props={studySet} />);

  render() {
    const setComponentList = this.renderSetCards();
    return (
      { setComponentList }
    );
  }
}
