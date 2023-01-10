import React from "react";
import withLogs from "../HOCs/withLogs";
//shallow comparison, shallow copy, deep copy
//React.PureComponent, shallow comparison of state and props, non-primitive type
const obj1 = { name: "adam", cars: ["camry", "escape"] };
const obj2 = { name: "adam", cars: ["camry", "accord"] };

//pure function, pure component
//pure function:

//higher order component: function that takes a component as argument and return another component
//higher order function: function take function as argument, and/or return a function

//shallow comparison: first level values, including the non-primitive
//deep comparison: compares the strict equality of all the nested primitive value

//hoc: higher order component, a function takes component as argument, and return another component, reuse state management and lifecycle management logic
//hoc hell
/* //equality
console.log(obj1 === obj2);
//deep comparison
console.log(
  obj1.name === obj2.name,
  obj1.cars[0] === obj2.cars[0],
  obj1.cars[1] === obj2.cars[1]
); //true, false
//shallow comparison
console.log(obj1.name === obj2.name, obj1.cars === obj2.cars); //false, false */

const shallowCompare = (obj1, obj2) => {
  if (obj1 === null || obj2 === null) {
    if (obj1 === obj2) return true;
  } else {
    if (Object.keys(obj1).length !== Object.keys(obj2).length) return false;
    if (
      Object.entries(obj1).every(([key, value]) => {
        return obj2[key] === value;
      })
    )
      return true;
    return false;
  }
};

export class MyPureComponent extends React.Component {
  shouldComponentUpdate(nextProps, nextState) {
    return !(
      shallowCompare(nextProps, this.props) &&
      shallowCompare(nextState, this.state)
    );
  }
}

class Sedan extends React.PureComponent {
  // shouldComponentUpdate(nextProps, nextState) {
  //   console.log("Sedan scu");
  //  /*  if (
  //     nextProps.Sedan.every((car, index) =>
  //       Object.entries(car).every(([key, value]) => {
  //         return this.props.Sedan[index][key] === value;
  //       })
  //     ) &&
  //     nextProps.onSellCar.toString() === this.props.onSellCar.toString()
  //   ) {
  //   }else{

  //   } */
  //   if(nextProps.Sedan === this.props.Sedan && nextProps.onSellCar === this.props.onSellCar){
  //     return false
  //   }else{
  //     return true
  //   }
  // }
  /* componentDidUpdate(){
    console.log("a car is sold")
  } */
  render() {
    console.log("sedan component is rendering", this.props); //0
    const { Sedan, onSellCar } = this.props;
    return (
      <div>
        {Sedan?.map((item, index) => {
          return (
            <div key={item.id}>
              <div>{item.model}</div>
              <div>{item.number}</div>
              <button
                onClick={() => {
                  onSellCar(index, "sedan");
                }}
              >{`sell 1 ${item.model}`}</button>
            </div>
          );
        })}
      </div>
    );
  }
}

export default withLogs(Sedan);
