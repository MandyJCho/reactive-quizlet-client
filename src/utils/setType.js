import _ from 'lodash';

export default function setType(payload, actionType) {
  return _.merge(payload, { type: actionType });
}
