import { combineReducers } from 'redux'

import sets from './sets';

export const rootReducer = combineReducers(
  sets,
);