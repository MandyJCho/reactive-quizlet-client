import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import SetComponent from '../components/SetComponent';
import ButtonComponent from '../components/ButtonComponent';
import * as SetActions from '../actions/setAC';
import asLink from '../components/HOCs/asLink';

const propTypes = {
  addSet: PropTypes.func.isRequired,
  updateSet: PropTypes.func.isRequired,
  deleteSet: PropTypes.func.isRequired,
  set: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      id: PropTypes.string,
      key: PropTypes.string,
    })).isRequired,
};

let SetLink = asLink(SetComponent);

class SetsContainer extends React.Component {
  getCardContainerLink = (set) => {
    let { title, compKey } = set;
    title = title.replace(' ', '-');
    return `/${compKey}/${title}-flashcards`;
  };

  handleAddSet = () => this.props.addSet({ title: 'dragon' });

  generateSetList = () => this.props.set.map((studySet) => {
    const to = this.getCardContainerLink(studySet);
    return <SetLink key={studySet.id} to={to} studySet={studySet} />;
  });

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
