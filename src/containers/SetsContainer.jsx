import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import SetComponent from '../components/SetComponent';
import LinkInjector from '../components/routes/SetLink';
import ButtonComponent from '../components/ButtonComponent';
import * as SetActions from '../actions/setAC';

class StudySetsContainer extends React.Component {
  handleAddSet = () => this.props.addSet('dragon');

  generateSetList = () => this.props.set.map(studySet => (

  ));

  render() {
    return (
      <div>
        { this.generateSetList() }
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
