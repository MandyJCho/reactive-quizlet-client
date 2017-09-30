import React from 'react';

import ButtonComponent from '../components/ButtonComponent';

export default class CardsContainer extends React.Component {

  componentDidMount = () => {
    store.subscribe();
  }

  handleClick = () => ('hey');

  render() {
    return (
      <div>
        <div>Hello</div>
        <ButtonComponent text="+" onClick={this.handleClick} />
      </div>
    );
  }
}
