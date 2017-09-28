import React from 'react';

import PropTypes from 'prop-types';

const propTypes = {
  placeholder: PropTypes.string,
  formTitle: PropTypes.string,
  value: PropTypes.string,
};

export default class TextFormComponent extends React.Component {
  handleBlur = () => {
    // set state here in redux to match

  };

  handleEnterKeyPress = () => {
    // check for enter
  };

  // route to redux updating statement

  render() {
    return (
      <div>
        <input
          placeholder={this.props.placeholder}
          value={this.props.value}
          onBlur={this.handleBlur}
          onKeyPress={this.handleEnterKeyPress}
        />
        {this.props.formTitle}
      </div>
    );
  }
}

TextFormComponent.propTypes = propTypes;
