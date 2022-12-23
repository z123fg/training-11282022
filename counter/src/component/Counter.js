import React from "react";

class Counter extends React.Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     counter: 0,
  //   };
  //   this.handleClick = this.handleClick.bind(this);
  // }

  // handleClick() {
  //   console.log(this);
  //   this.setState({
  //     counter: this.state.counter + 1,
  //   });
  // }

  render() {
    const { title, counter, clickHandler } = this.props;
    return (
      <>
        <h1>
          {title}: {counter}
        </h1>
        <button onClick={clickHandler}>increment</button>
      </>
    );
  }
}

export default Counter;
