import React from 'react';
import uuid from 'uuid/v1';

import SetComponent from '../components/SetComponent';
import ButtonComponent from '../components/ButtonComponent';

export default class StudySetsContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      studySetsList: ['biology', 'chemistry', 'algorithms'],
    };
  }


  handleClick = () => console.log('click');

  handleCardRendering = () => this.state.studySetsList.map(studySet =>
    <SetComponent name={studySet} key={uuid()} />);

  render() {
    return (
      <div>
        { this.handleCardRendering() }
        <ButtonComponent onClick={this.handleClick()} text="+" />
      </div>
    );
  }
}
