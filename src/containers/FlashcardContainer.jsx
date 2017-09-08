import React from 'react';

import ButtonComponent from '../components/ButtonComponent';

class CardContainer extends React.Component {
  handleClick = () => ('hey');

  render() {
    return (
      <div>
        <div>Hello</div>
        <ButtonComponent text="+" />
      </div>
    );
  }
}

export default CardContainer;
