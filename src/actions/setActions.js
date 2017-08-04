import SET from './ActionTypes';
import setType from '../utils/setType';


export default function addSet(payload) {
  return setType(payload, SET.CREATE);
}

export default function updateSet(payload) {
  return setType(payload, SET.UPDATE);
}

export default function deleteSet(payload) {
  return setType(payload, SET.DELETE);
}
