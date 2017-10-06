import React from 'react';
import PropTypes from 'prop-types';
import connect from 'react-redux';

import SetActions from '../../actions/setAC';
import SetComponent from '../../components/SetComponent';

const propTypes = {
  addSet: PropTypes.func.isRequired,
  updateSet: PropTypes.func.isRequired,
  deleteSet: PropTypes.func.isRequired,
  title: PropTypes.string,
  id: PropTypes.string,
  compKey: PropTypes.string,
};


export default class SetController extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
    };

  }

  componentDidMount = () => {
    // use apollo here to get title
  }

  componentDidReceiveProps = (nextProps) => {
    this.setState();
  }

  shouldComponentUpdate = (nextProps, nextState) => this.props.title === nextState.title;

  componentDidUpdate = () => {
    // same with network refreshing for title
  }

  handleAdd = title => this.props.addSet({ title });

  handleUpdate = title => this.props.updateSet({id: this.props.id, title});

  handleDelete = () => this.props.deleteSet({id: this.props.id});

  render() {
    return (
      <SetComponent
        onAdd={this.handleAdd}
        onUpdate={this.handleUpdate}
        onDelete={this.handleDelete}
      />
    );
  }
}

SetController.propTypes = propTypes;

function mapStateToProps(state) { return {set: state.set}; }

connect(
  mapStateToProps,
  SetActions,
)(SetController);
