import React, { useState, useEffect } from "react";

const Test = () => {
  const [counter1, setCounter1] = useState(0);
  const [counter2, setCounter2] = React.useState(0);

  /* 
    what: function, 2 argument, function, array(dependency array, state, props), doesn't return anything
    why: hooks mimics lifecycle method
    how: componentDidMount, componentDidUpdate, componentWillUnmount, with or without dependency array difference
  
  */
  // useEffect(() => {
  //   console.log("componentDidMount");
  //  /*  const interval = setInterval(()=>{console.log(1)}, 1000);
  //   return () => {
  //     clearInterval(interval)
  //   } */
  // }, []);

  // useEffect(() => {
  //   console.log("componentDidUpdate, componentDidMount, triggered by counter1 state");
  // }, [counter1]);

  // useEffect(() => {
  //   console.log("componentDidUpdate, componentDidMount, triggered by counter2 state");
  // }, [counter2]);

  // useEffect(() => {
  //   console.log("componentDidUpdate, componentDidMount, triggered by counter1 or counter2 state");

  // }, [counter1,counter2]);

  // useEffect(()=>{ //componentDidUpdate, componentDidMount
  //   console.log("trigger by every rendering");

  // })

  //refresh: 2(0,error ),1(0, 0),3(0, 0),4(0,0)
  //increment counter1: 5,6,2,1,3

  useEffect(() => {
    const counter1El = document.querySelector("#counter1");
    console.log(1,counter1,counter1El?.innerHTML)
  }, [counter1]);

  const counter1El = document.querySelector("#counter1");
  console.log(2,counter1,counter1El?.innerHTML)

  useEffect(() => {
    const counter1El = document.querySelector("#counter1");
    console.log(3,counter1,counter1El?.innerHTML)
  });

  useEffect(()=>{
    const counter1El = document.querySelector("#counter1");
    console.log(4,counter1,counter1El?.innerHTML)
  },[]);

  const handleClick1 = () => {
    const counter1El = document.querySelector("#counter1");
    console.log(5,counter1,counter1El?.innerHTML)
    setCounter1((prev) => prev + 1);
    console.log(6,counter1,counter1El?.innerHTML)
  };
  const handleClick2 = () => {
    setCounter2((prev) => prev + 1);
  };

  console.log("render");
  return (
    <>
      <div>
        <span id="counter1">{counter1}</span>
        <button onClick={handleClick1}>increment1</button>
      </div>
      <div>
        {counter2}
        <button onClick={handleClick2}>increment2</button>
      </div>
    </>
  );
};

export default Test;
