import React from 'react';
import PropTypes from 'prop-types';

import CardsContainer from '../containers/CardsContainer';


const propTypes = {
  studySet: PropTypes.shape({
    title: PropTypes.string,
    compKey: PropTypes.string,
  }),
};

export default class SetComponent extends React.Component {
  shouldComponentUpdate(nextProps) {
    return this.props.studySet.compKey !== nextProps.compKey;
  }

  render() {
    const { title, compKey } = this.props.studySet;
    return (
      <div>
        {title} {compKey}
        {CardsContainer}
      </div>
    );
  }
}

SetComponent.propTypes = propTypes;
