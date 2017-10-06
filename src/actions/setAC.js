import { SET } from './ActionTypes';
import initializeType from '../utils/initializeType';

function addSet(payload) {
  return initializeType(payload, SET.CREATE);
}

function updateSet(payload) {
  return initializeType(payload, SET.UPDATE);
}

function deleteSet(payload) {
  return initializeType(payload, SET.DELETE);
}

export default {
  addSet,
  updateSet,
  deleteSet,
};
