import { CARD } from '../actions/ActionTypes';
import { addState} from '../utils/CRUDutils';

const defaultState = [];

export default function cards(state = defaultState, action) {
  let nextState;
  switch (action.type) {
    case (CARD.CREATE):
      nextState = addState(state, action);
      break;
    case (CARD.UPDATE):
    case (CARD.DELETE):

      break;
    default:
      nextState = state;
  }

  return nextState;
}
