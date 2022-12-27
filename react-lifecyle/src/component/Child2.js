import React from "react";

class Child2 extends React.Component {
  componentDidUpdate() {
    console.log("Child2 componentDidUpdate");
  }

  render() {
    console.log("Child2 render");
    return;
  }
}

export default Child2;
