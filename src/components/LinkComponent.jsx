import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const propTypes = {
  to: PropTypes.string,
  displayText: PropTypes.string,
  children: PropTypes.node,
};

export default class LinkComponent extends React.Component {
  shouldComponentUpdate = nextProps => this.props.to !== nextProps.to;

  render() {
    const { to, displayText, ...passProps } = this.props;
    return (
      <div>
        <Link to={to} state={passProps}>
          {this.props.children || displayText}
        </Link>
      </div>
    );
  }
}

LinkComponent.propTypes = propTypes;
