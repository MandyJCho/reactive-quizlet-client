import React from 'react';

export default function generateWrapper(Wrapper, Component) {
  return (
    <Wrapper>
      <Component />
    </Wrapper>);
}