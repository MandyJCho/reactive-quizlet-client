import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import * as SetActions from '../../actions/setAC';
import SetComponent from '../../components/SetComponent';
import CardsContainer from '../CardsContainer';

const propTypes = {
  addSet: PropTypes.func.isRequired,
  updateSet: PropTypes.func.isRequired,
  deleteSet: PropTypes.func.isRequired,
  id: PropTypes.string,
};

/*  componentDidMount = () => {
    // use apollo here to get title
  }

  componentDidReceiveProps = (nextProps) => {
    this.setState();
  }

  shouldComponentUpdate = (nextProps, nextState) => this.props.title === nextState.title;

  componentDidUpdate = () => {
    // same with network refreshing for title
  }
 */

class SetController extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
    };
  }

  handleAdd = title => this.props.addSet({ title });

  handleUpdate = title => this.props.updateSet({ id: this.props.id, title });

  handleDelete = () => this.props.deleteSet({ id: this.props.id });

  render() {
    console.log(this.props);
    return (
      <div>
        <SetComponent
          title={this.state.title}
          id={this.props.id}
          onAdd={this.handleAdd}
          onUpdate={this.handleUpdate}
          onDelete={this.handleDelete}
        />
        <CardsContainer />
      </div>
    );
  }
}

SetController.propTypes = propTypes;

function mapStateToProps(state) { return { set: state.set }; }

export default connect(
  mapStateToProps,
  SetActions,
)(SetController);
