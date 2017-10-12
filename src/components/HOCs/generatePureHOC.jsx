import React from 'react';

export default function generateHOC(OuterComponent, outerProps, InnerComponent, innerProps) {
  const Wrapper = props => (
    <OuterComponent {...props} {...outerProps}>
      <InnerComponent {...innerProps} />
    </OuterComponent>
  );

  Wrapper.displayName = `${OuterComponent.displayName}HOC-${InnerComponent.displayName || InnerComponent.name || 'Component'}`;

  return Wrapper;
}
