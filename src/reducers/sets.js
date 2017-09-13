import { SET } from '../actions/ActionTypes';
import { addState, modifyState } from '../utils/CRUDutils';

const defaultState = [];

export default function sets(state = defaultState, action) {
  let nextState;
  switch (action.type) {
    case (SET.CREATE):
      nextState = addState(state, action);
      break;
    case (SET.UPDATE):
    case (SET.DELETE):
      nextState = modifyState(state, action, SET);
      break;
    default:
      nextState = state;
  }

  console.log(`next sets: ${JSON.stringify(nextState)}`);
  return nextState;
}
