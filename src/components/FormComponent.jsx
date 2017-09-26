import React from 'react';

import PropTypes from 'prop-types';

const propTypes = {
  placeholder: PropTypes.string,
  formTitle: PropTypes.string,
};

export default class FormComponent extends React.Component {
  constructor(props) {
    super(props);
  }

  handleBlur = () => {};

  render() {
    return (
      <div>
        <input
          placeholder={this.props.placeholder}
          onBlur={this.handleBlur}
        />
        {this.props.formTitle}
      </div>
    );
  }

}