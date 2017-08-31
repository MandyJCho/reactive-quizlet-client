import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import uuid from 'uuid/v1'; // get rid of this later -- uuid should be drawn from state

import SetComponent from '../components/SetComponent';
import ButtonComponent from '../components/ButtonComponent';
import * as SetActions from '../actions/setAC';

class StudySetsContainer extends React.Component {
  constructor(props) {
    super(props);
    console.log(this.props);
    /* this.state = {
      studySetsList: ['biology', 'chemistry', 'algorithms'],
    }; */
  }

  componentDidUpdate = (prevProps, prevState) => {
    console.log('Set container has rerendered');
    return Object.assign({}, prevProps, prevState);
  };

  handleClick = () => this.props.addSet('dragon');

  handleCardRendering = () => this.state.studySetsList.map(studySet =>
    <SetComponent name={studySet} key={uuid()} />);

  render() {
    console.log(this.props);
    return (
      <div>
        { this.handleCardRendering() }
        <ButtonComponent onClick={this.handleClick} text="+" />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return state.set;
}

const propTypes = {
  addSet: PropTypes.func.isRequired,
};

StudySetsContainer.propTypes = propTypes;

export default connect(
  mapStateToProps,
  SetActions,
)(StudySetsContainer);
