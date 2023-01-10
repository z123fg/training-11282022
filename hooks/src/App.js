import logo from "./logo.svg";
import "./App.css";
import React, { useEffect, useState } from "react";
import Test from "./components/Test";
import Cars from "./components/Cars";

//functional component(stateless, cannot have state and lifecycle management), class component(can have state and lifecycle management)
//2019 feb, v16.8, react introduced hooks, solves HOC hell
//functional with hooks(stateful, can have state and lifecycle management), class component(same)

// stateless , functional component, dumb component

//useState: state manage
//useEffect: lifecycle management

//hooks: is a pattern that allow functional component to have state and lifecycle management
//camel case, skewer case
function App() {
  return (
    <>
      <div>
       <Cars/>
      </div>
    </>
  );
}

export default App;
