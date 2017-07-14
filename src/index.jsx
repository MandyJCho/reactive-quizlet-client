import React from 'react';
import ReactDOM from 'react-dom';

import lightBaseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import AppBar from 'material-ui/AppBar';

import StudySetsContainer from "./containers/StudySetsContainer";

const mount = document.getElementById('root');

function Quizlet() {
  return (
    <MuiThemeProvider muiTheme={getMuiTheme(lightBaseTheme)} >
      <AppBar title="Reactive Quizlet" showMenuIconButton={false} />
      <StudySetsContainer/>
    </MuiThemeProvider>
  );
}

ReactDOM.render(<Quizlet />, mount);
