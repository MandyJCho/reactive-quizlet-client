import _ from 'lodash';

import SET from '../actions/ActionTypes';

function addSet(state, title) {
  return {...state, title};
}

export default function sets(state = [], action) {
  switch(action.type) {
    case SET.CREATE_SET :
      return addSet(state, action.title)
    default:
      return state;
  }
}
