import _ from 'lodash';

export default function getNamespaceActions(namespace, funcs) {
  return _.map(funcs, func => `${namespace}/${func}`);
}
