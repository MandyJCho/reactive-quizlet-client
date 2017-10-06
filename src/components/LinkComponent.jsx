import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const propTypes = {
  to: PropTypes.string,
  displayText: PropTypes.displayText,
};

class LinkComponent extends React.PureComponent {
    shouldComponentUpdate = nextProps => this.props.to !== nextProps.to;

    render() {
      const {to, displayText} = this.props;
      return (
        <Link to={to}>
          {displayText}
        </Link>
      );
    }
}

LinkComponent.propTypes = propTypes;
