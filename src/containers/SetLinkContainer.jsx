import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { addSet } from '../actions/setAC';
import LinkComponent from '../components/LinkComponent';

const propTypes = {
  addSet: PropTypes.func,
  sets: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      id: PropTypes.string,
      key: PropTypes.string,
    })),
};

class SetLinkContainer extends React.Component {
  generateStudysetURL = (set) => {
    let { title, compKey } = set;
    title = title.replace(' ', '-');
    return `/${compKey}/${title}-flashcards`;
  };

  generateSetLinkList = () => this.props.sets.map((studySet) => {
    const to = this.generateStudysetURL(studySet);
    return (<LinkComponent
      key={studySet.id}
      to={to}
      displayText={studySet.title}
      {...studySet}
    />);
  });

  render() {
    return (
      <div>
        { this.generateSetLinkList() }
        <LinkComponent to="/create-page" >
          create
        </LinkComponent>
      </div>
    );
  }
}

SetLinkContainer.propTypes = propTypes;

function mapStateToProps(state) {
  return { sets: state.sets };
}

export default connect(
  mapStateToProps,
  { addSet },
)(SetLinkContainer);
