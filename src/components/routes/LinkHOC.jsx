import React from 'react';
import Proptypes from 'prop-types';
import { BrowserRouter as Router,
  Route,
  Link,
} from 'react-router-dom';

const propTypes = {
  to: Proptypes.string.isRequired,
  children: Proptypes.node,
  path: Proptypes.string.isRequired,
};

export default function LinkHOC(props, context){
  return (
    <Router>
      <Link to={props.to} >{props.children}</Link>
      <Route path={props.path} />
    </Router>
  );
}

LinkHOC.propTypes = propTypes;
