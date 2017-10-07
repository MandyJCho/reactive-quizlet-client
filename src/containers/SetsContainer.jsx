import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { addSet } from '../actions/setAC';
import SetLinkComponent from '../components/LinkComponent';
import ButtonComponent from '../components/ButtonComponent';

const propTypes = {
  addSet: PropTypes.func.isRequired,
  set: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      id: PropTypes.string,
      key: PropTypes.string,
    })),
};

export default class SetsContainer extends React.Component {
  generateStudysetURL = (set) => {
    let { title, compKey } = set;
    title = title.replace(' ', '-');
    return `/${compKey}/${title}-flashcards`;
  };

  generateSetLinkList = () => this.props.set.map((studySet) => {
    const to = this.generateStudysetURL(studySet);
    return (<SetLinkComponent
      key={studySet.id}
      to={to}
      {...studySet}
    />);
  });

  handleAddSet = () => {
    this.props.addSet();
  };

  render() {
    return (
      <div>
        { this.generateSetLinkList() }
        <ButtonComponent onClick={this.handleAddSet} text="+" />
      </div>
    );
  }
}

SetsContainer.propTypes = propTypes;

function mapStateToProps(state) {
  return { set: state.set };
}

connect(
  mapStateToProps,
  addSet,
)(SetsContainer);
