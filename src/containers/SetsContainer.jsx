import React from 'react';
import PropTypes from 'prop-types';

import SetLinkComponent from '../components/LinkComponent';
import ButtonComponent from '../components/ButtonComponent';

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

class SetsContainer extends React.Component {
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

