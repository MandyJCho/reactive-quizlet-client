import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

<<<<<<< HEAD
import SetLink from '../components/routes/SetLink';
=======
/* import SetComponent from '../components/SetComponent';
import LinkInjector from '../components/routes/SetLink'; */
>>>>>>> f965ccf... ignore logs
import ButtonComponent from '../components/ButtonComponent';
import * as SetActions from '../actions/setAC';

const propTypes = {
  addSet: PropTypes.func.isRequired,
  updateSet: PropTypes.func.isRequired,
  deleteSet: PropTypes.func.isRequired,
<<<<<<< HEAD
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

=======
  set: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      setID: PropTypes.string,
      urlKey: PropTypes.string,
    })).isRequired,
};

class StudySetsContainer extends React.Component {
  handleAddSet = () => this.props.addSet('dragon');

  generateSetList = () => this.props.set.map(studySet => studySet);
  /* link component goes here */
>>>>>>> f965ccf... ignore logs
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

<<<<<<< HEAD
SetsContainer.propTypes = propTypes;
=======
StudySetsContainer.propTypes = propTypes;
>>>>>>> f965ccf... ignore logs

export default connect(
  mapStateToProps,
  SetActions,
)(SetsContainer);
