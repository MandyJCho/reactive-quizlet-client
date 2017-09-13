import { CARD } from '../actions/ActionTypes';
import { addState, modifyState } from '../utils/CRUDutils';

const defaultState = [];

export default function cards(state = defaultState, action) {
  let nextState;
  switch (action.type) {
    case (CARD.CREATE):
      nextState = addState(state, action);
      break;
    case (CARD.UPDATE):
    case (CARD.DELETE):
      nextState = modifyState(state, action, CARD);
      break;
    default:
      nextState = state;
  }

  console.log(`next cards: ${JSON.stringify(nextState)}`);
  return nextState;
}
