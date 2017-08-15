import _ from 'lodash';

export default function getNamespaceActions(namespace, actions) {
  const namedActions =  _.map(actions, action => [action, `${namespace}_${action}`]);
  return _.fromPairs(namedActions);
}
