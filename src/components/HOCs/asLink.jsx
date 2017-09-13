import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const propTypes = {
  to: PropTypes.string.isRequired,
};

export default function asLink(Component) {
  const style = { backgroundColor: 'blue' };

  class Wrapper extends React.Component {
    shouldComponentUpdate(nextProps) {
      return this.props.to !== nextProps.to;
    }

    render() {
      const { to, ...innerProps } = this.props;
      return (
        <Link to={to} style={style}>
          <Component {...innerProps} />
        </Link>
      );
    }
  }

  Wrapper.propTypes = propTypes;

  return Wrapper;
}
