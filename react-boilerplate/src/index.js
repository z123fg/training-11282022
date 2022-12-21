/* 
  React, library to render the page, single page application
  multi page application(server side rendering), JSP
  react advantage: performance, modularization
  boilerplate:  create-react-app(CRA), bundler, transpiler, 
  transpiler: babel, transpile newer version of javascript into older more compatible version of javascript
  babel: what: transpiler, why: transpile newer version of javascript into older more compatible version of javascript, how: dictionary, recoginize the code and generate the target code
  bundler: webpack
  module system: common.js(require()), esmodule(import), umd, system.js
  minification:
  uglify
  */

import HelloMessage from "./components/HelloMessage";
import ReactDOM from "react-dom/client";
import React from "react";
console.log("hello world")

//React: object
//Component: Class

// class HelloMessage extends React.Component {
//   render() {
//     return <div>Hello {this.props.name}</div>
//     /* React.createElement(
//       "div",
//       null,
//       "Hello ",
//       this.props.name
//     );//virtual node */
//   }
// }

//ReactDOM: Object
//

const root = ReactDOM.createRoot(document.getElementById("root"));//root virtual node
root.render(<HelloMessage name="Taylor" />);