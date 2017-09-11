import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Router from 'react-router-dom';

// import SetLink from '../components/routes/SetLink';
import ButtonComponent from '../components/ButtonComponent';
import * as SetActions from '../actions/setAC';

const childContextTypes = {
  router: PropTypes.object.isRequired,
};

const propTypes = {
  addSet: PropTypes.func.isRequired,
  updateSet: PropTypes.func.isRequired,
  deleteSet: PropTypes.func.isRequired,
  set: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      setID: PropTypes.string,
      urlKey: PropTypes.string,
    })).isRequired,
}

class SetsContainer extends React.Component {
  getChileContextTypes = () => ({ router: Router() });

  handleAddSet = () => this.props.addSet('dragon');

  generateSetList = () => this.props.set.map(studySet => studySet);
  /* link component goes here */
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

SetsContainer.childContextTypes = childContextTypes;
SetsContainer.propTypes = propTypes;

export default connect(
  mapStateToProps,
  SetActions,
)(SetsContainer);
