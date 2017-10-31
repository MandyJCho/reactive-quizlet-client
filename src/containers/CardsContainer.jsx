import React from 'react';

import ButtonComponent from '../components/ButtonComponent';

export default class CardsContainer extends React.Component {
  handleClick = () => ('hey');

  // handle an array of components
  render() {
    return (
      <div>
        <div>Hello</div>
        <ButtonComponent text="+" onClick={this.handleClick} />
      </div>
    );
  }
}
