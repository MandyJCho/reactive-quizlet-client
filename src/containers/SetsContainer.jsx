import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import SetComponent from '../components/SetComponent';
import ButtonComponent from '../components/ButtonComponent';
import * as SetActions from '../actions/setAC';

class StudySetsContainer extends React.Component {
  componentDidUpdate = (prevProps, prevState) => {
    console.log('Set container has rerendered');
    return Object.assign({}, prevProps, prevState);
  };

  handleClick = () => this.props.addSet('dragon');

  handleCardRendering = () => this.props.set.map(studySet =>
    <SetComponent name={studySet.title} key={studySet.id} />);

  render() {
    return (
      <div>
        { this.handleCardRendering() }
        <ButtonComponent onClick={this.handleClick} text="+" />
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
