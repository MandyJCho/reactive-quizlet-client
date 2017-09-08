import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import SetLink from '../components/routes/SetLink';
import ButtonComponent from '../components/ButtonComponent';
import * as SetActions from '../actions/setAC';

const propTypes = {
  addSet: PropTypes.func.isRequired,
  updateSet: PropTypes.func.isRequired,
  deleteSet: PropTypes.func.isRequired,
  set: PropTypes.array.isRequired,
};

class SetsContainer extends React.Component {
  static contextTypes = {
    router: PropTypes.func.isRequired,
  };

  handleAddSet = () => this.props.addSet('dragon');

  generateSetList = () => this.props.set.map(studySet => (
    <SetLink studySet={studySet} key={studySet.id} />
  ));

  render() {
    return (
      <div>
        { this.generateSetList() }
        <ButtonComponent onClick={this.handleAddSet} text="+" />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { set: state.set };
}

SetsContainer.propTypes = propTypes;

export default connect(
  mapStateToProps,
  SetActions,
)(SetsContainer);
