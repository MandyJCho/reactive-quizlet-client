import React, {Component} from 'react';
import PropTypes from 'prop-types';
import uuid from 'uuid/v1';

const propTypes = {

};

const defaultProps = {

};

export default class StudySetsContainer extends Component {
  constructor(props) {
    super(props);

    // State currently pulls from a static bank of data
    this.state = {
        [set  + uuid()] : {
          name: 'Biology Exam',
          cards: {
            'mitochondria' : 'powerhouse of the cell',
            'chitin': 'cell of wall fungi'
          }
        },
    };
  }

  render() {
    return (
      <StudySetComponent>

      </StudySetComponent>
    );
  }

}

StudySetsContainer.propTypes = propTypes;
StudySetsContainer.defaultProps = defaultProps;