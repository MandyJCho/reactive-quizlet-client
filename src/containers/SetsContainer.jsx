import React from 'react';
import uuid from 'uuid/v1';

import Test from '../components/SetComponent';
// import StudySetComponent from '../components/StudySetComponent';

export default class StudySetsContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      studySetsList: ['biology', 'chemistry', 'algorithms'],
    };
  }

  renderSetCards = () => this.state.studySetsList.map(studySet =>
    <Test name={studySet} key={uuid()}>{studySet}</Test>);

  render() {
    console.log(this.renderSetCards());
    return (
      <div>
        {this.renderSetCards()}
      </div>
    );
  }
}
