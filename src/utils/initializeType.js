import _ from 'lodash';

export default function initializeType(payload, actionType) {
  return _.merge(payload, { type: actionType });
}
