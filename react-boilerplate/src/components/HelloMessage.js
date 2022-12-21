
import React from "react";
class HelloMessage extends React.Component {
  render() {
    return <div>Hello {this.props.name}</div>
    /* React.createElement(
      "div",
      null,
      "Hello ",
      this.props.name
    );//virtual node */
  }
}


export default HelloMessage