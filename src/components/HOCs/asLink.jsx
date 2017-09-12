import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export default function asLink(component) {
  const propTypes = {
    keyComp: PropTypes.string.isRequired,
    to: PropTypes.string.isRequired,
  };

  class WrapperLink extends React.Component {
    shouldComponentUpdate(nextProps) {
      return this.props.keyComp !== nextProps.keyComp;
    }

    render() {
      return (
        <Link to={this.props.to} style={{ backgroundColor: 'pink' }} >
          {component}
        </Link>

      );
    }
  }

  WrapperLink.propTypes = propTypes;

  return WrapperLink;
}
