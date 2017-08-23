import React from 'react';
import PropTypes from 'prop-types';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';

const propTypes = {
  muiTheme: PropTypes.object,
  title: PropTypes.string,
  showMenuIconButton: PropTypes.bool,
};

export default function HeaderComponent(props) {
  return (
    <MuiThemeProvider muiTheme={props.muiTheme} >
      <AppBar title={props.title} showMenuIconButton={props.showMenuIconButton} />
    </MuiThemeProvider>
  );
}

HeaderComponent.propTypes = propTypes;
