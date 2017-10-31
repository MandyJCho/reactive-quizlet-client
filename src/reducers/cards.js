import { CARD } from '../actions/ActionTypes';
import { addState, modifyState } from '../utils/CRUDutils';

const defaultState = [];
function deleteAll(state, action){
  return state.filter((s) => s.owner !== action.owner)
}

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
    case (CARD.DELETEALL):
      nextState = deleteAll(state, action)
    default:
      nextState = state;
  }

  console.log(`next cards: ${JSON.stringify(nextState)}`);
  return nextState;
}
