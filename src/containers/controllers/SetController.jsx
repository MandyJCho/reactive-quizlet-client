import React from 'react';
import connect from 'react-redux';

import { * as SetActions } from '../../'

// have this component wrap setcomponent and do lifecycle hooks here
// do error handling here as well with react 16

export default class SetController extends React.Component {

  handleAdd()


  render() {

  }
}

// connect to redux here
// SUBSCRIBE FROM HERE


const mapStateToProps = (state) => {
  return {set : state.set};
}

connect(
  mapStateToProps,

)(SetController);
