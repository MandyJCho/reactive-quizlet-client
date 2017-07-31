import React from 'react';
import PropTypes from 'prop-types';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';

const propTypes = {
  onClick: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired,
};

const defaultProps = {
  onClick: () => console.log('Clicked'),
  text: '',
};

export default function ButtonComponent(props) {
  return (
    <div>
      <MuiThemeProvider>
        <RaisedButton backgroundColor="primary" onClick={props.onClick}>{props.text}</RaisedButton>
      </MuiThemeProvider>
    </div>
  );
}

ButtonComponent.propTypes = propTypes;
ButtonComponent.defaultProps = defaultProps;
