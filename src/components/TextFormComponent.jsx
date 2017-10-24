import React from 'react';

import PropTypes from 'prop-types';

const propTypes = {
  placeholder: PropTypes.string,
  formTitle: PropTypes.string,
  value: PropTypes.string,
  name: PropTypes.string.isRequired,
};

export default class TextFormComponent extends React.Component {
  constructor(props) {
    super(props);
    this.name = this.props.name;
    this.state = {
      [this.name]: this.props.value,
    };
  }
  handleBlur = () => {
    console.log('blurred');
    
  };

  handleChange = (event) => {
    const { value: val} = event.target;
    this.setState({[this.name]: val });
    console.log(this.state);
  };

  handleKeyDown= (event) => {
    const { keyCode } = event;
    if (keyCode === 13 || keyCode === 27) {
      this.handleBlur(event);
    }
  };

  // route to redux updating statement

  render() {
    return (
      <div>
        <input
          placeholder={this.props.placeholder}
          value={this.state[this.name]}
          onBlur={this.handleBlur}
          onKeyDown={this.handleKeyDown}
          onChange={this.handleChange}
        />
        <div>
          {this.state[this.name] || this.props.formTitle}
        </div>
        <br />
      </div>
    );
  }
}

TextFormComponent.propTypes = propTypes;
