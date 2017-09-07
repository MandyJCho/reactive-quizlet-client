import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import SetComponent from '../components/SetComponent';
import ButtonComponent from '../components/ButtonComponent';
import * as SetActions from '../actions/setAC';

class StudySetsContainer extends React.Component {
  componentDidUpdate = (prevProps, prevState) => {
    console.log('Set container has rerendered');
    return Object.assign({}, prevProps, prevState);
  };

  handleAddSet = () => this.props.addSet('dragon');

  handleRouteToCards = () => {};

  handleCardRendering = () => this.props.set.map(studySet => (
    <Link to="">
      <SetComponent name={studySet.title} key={studySet.id} />
    </Link>
  ));

  render() {
    return (
      <div>
        { this.handleCardRendering() }
        <ButtonComponent onClick={this.handleAddSet()} text="+" />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { set: state.set };
}

const propTypes = {
  addSet: PropTypes.func.isRequired,
  updateSet: PropTypes.func.isRequired,
  deleteSet: PropTypes.func.isRequired,
  set: PropTypes.array.isRequired,
};

StudySetsContainer.propTypes = propTypes;

export default connect(
  mapStateToProps,
  SetActions,
)(StudySetsContainer);
