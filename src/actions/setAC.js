import { SET } from './ActionTypes';
import initializeType from '../utils/initializeType';

export function addSet(payload) {
  return initializeType(payload, SET.CREATE);
}

export function updateSet(payload) {
  return initializeType(payload, SET.UPDATE);
}

export function deleteSet(payload) {
  return initializeType(payload, SET.DELETE);
}

