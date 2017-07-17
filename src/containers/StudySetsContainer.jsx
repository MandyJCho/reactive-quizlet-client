import React from 'react';
import uuid from 'uuid/v1'

import StudySetComponent from '../components/StudySetComponent';

export default class StudySetsContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      studySetsList: ['biology', 'chemistry', 'algorithms'],
    };
  }

  renderSetCards = () => this.state.studySetsList.map(studySet => console.log('test'))
    //<SetComponent props={studySet} key={uuid()}/>)

  render() {
/*    const setComponentList = this.renderSetCards();
    console.log(setComponentList);
    return <div>Set component</div>*/

    return (
      <StudySetComponent/>
    );
  }
}
