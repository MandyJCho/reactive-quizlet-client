import React from 'react';

export default function generateWrapper(Wrapper, Component, props) {
  return (
    <Wrapper>
      <Component {...props} />
    </Wrapper>);
}