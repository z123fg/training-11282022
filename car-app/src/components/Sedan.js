import React from "react";
//shallow comparison, shallow copy, deep copy
//React.PureComponent, shallow comparison of state and props, non-primitive type
const obj1 = { name: "adam", cars: ["camry", "escape"] };
const obj2 = { name: "adam", cars: ["camry", "accord"] };

//pure function, pure component
//pure function:

//higher order component: function that takes a component as argument and return another component
//higher order function: function take function as argument

//shallow comparison: first level values, including the non-primitive
//deep comparison: compares the strict equality of all the nested primitive value

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
export class MyPureComponent extends React.Component {
  shouldComponentUpdate(nextProps, nextState){
    if(){
      return false
    }else{
      return true
    }
    
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
  render() {
    console.log("sedan component is rendering", this.props); //0
    const { Sedan, onSellCar } = this.props;
    return (
      <div>
        {Sedan.map((item, index) => {
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

export default Sedan;
