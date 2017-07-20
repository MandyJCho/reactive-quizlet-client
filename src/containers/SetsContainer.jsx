import React from 'react';
import uuid from 'uuid/v1';

import SetComponent from '../components/SetComponent';
// import StudySetComponent from '../components/StudySetComponent';

export default class StudySetsContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      studySetsList: ['biology', 'chemistry', 'algorithms'],
    };
  }

  renderSetCards = () => this.state.studySetsList.map(studySet =>
    <SetComponent name={studySet} key={uuid()}>{studySet}</SetComponent>);

  render() {
    return (
      <div>
        {this.renderSetCards()}
      </div>
    );
  }
}
