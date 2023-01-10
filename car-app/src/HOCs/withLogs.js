import React from "react";
function withLogs(WrappedComponent) {
  return class WrapperComponent extends React.Component {
    componentDidUpdate(){
      console.log("a car is sold!")
    }
    
    render() {
      return <WrappedComponent {...this.props} />;
    }
  };
}

export default withLogs
