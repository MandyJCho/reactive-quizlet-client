import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import uuid from 'uuid/v1';

import SetComponent from '../components/SetComponent';
import ButtonComponent from '../components/ButtonComponent';
import setActions from '../actions/setActionCreators';

class StudySetsContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      studySetsList: ['biology', 'chemistry', 'algorithms'],
    };
  }

  componentDidUpdate = (prevProps, prevState) => {
    console.log('Set container has rerendered');
    return Object.assign({}, prevProps, prevState);
  };

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

function mapStateToProps(state) {
  return state.set;
}

function mapDispatchToProps(dispatch) {
  return dispatch;
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(StudySetsContainer);
