import React from 'react';

export default function asErrorBoundary(compState, compProps, Component, ErrorComponent) {
  class ErrorWrapper extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        ...compState,
        hasError: false,
      }
    }

    componentDidCatch(error, log) {
      this.setState({hasError: true });
      console.log(error, log);
    }

    render() {
      const hasError = this.state.hasError;
      return (
        <div>
          { hasError ?
            (<ErrorComponent {...compProps} />) :
            (<Component {...compProps} />)
          }
        </div>
      );
    }
  }

}