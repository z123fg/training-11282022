import React from "react";
import Sedan from "./Sedan";
import SUV from "./SUV";

class Cars extends React.Component {
  state = {
    carsData: {
      cars: {
        sedan: [
          {
            id: 1,
            model: "camry",
            number: 1,
          },
        ],
        SUV: [
          {
            id: 2,
            model: "escape",
            number: 1,
          },
        ],
      },
      totalNumber: 2,
    },
  };

  /* constructor(props){
    super(props)
    this.handleSellCar = this.handleSellCar.bind(this)
  } */

  /* 
    this:
      function:
        regular: the object invokes it
        arrow: lexical
      method:
        regular: the object that invokes it
        arrow: the object that is initialized from this class
  */
  //immutable data
  handleSellCar = (index, category) => {
    //arr.splice
    console.log("selling car", index, category);
    //mutating the original object
    //this.state.carsData.cars[category].number = this.state.carsData.cars[category].number - 1;
    //spread operator: shallow copy, deep copy

    /* 
      newState = {
        carsData: {
          cars: {
            sedan: [
              {
                id: 1,
                model: "camry",
                number: 1,
              },
              {
                id: 1,
                model: "accord",
                number: 2,}
            ],
            SUV: [
              {
                id: 2,
                model: "escape",
                number: 1,
              },
            ],
          },
          totalNumber: 2,
        },
      };
    */
    //shallow copy: only create new reference of the outtermost wrapper object
    /*     const newState = { ...this.state };
    console.log(
      newState === this.state,
      newState.carsData === this.state.carsData,
      newState.carsData.cars === this.state.carsData.cars,
      newState.carsData.cars.sedan === this.state.carsData.cars.sedan,
      newState.carsData.cars.sedan[0] === this.state.carsData.cars.sedan[0],
      newState.carsData.cars.sedan[0].model ===
        this.state.carsData.cars.sedan[0].model
    ); //false, true, true, true, true, true

    newState.carsData.cars[category][index].number = newState.carsData.cars[category][index].number - 1; //mutating */
    //0, sedan
    //const newState = JSON.parse(JSON.stringify(this.state));
    const newState = {
      ...this.state,
      carsData: {
        ...this.state.carsData,
        cars: {
          ...this.state.carsData.cars,
          sedan: this.state.carsData.cars.sedan.map((item, index) => {
            if (index === 0) {
              return { ...item, number: item.number - 1 }; //item.number = item.number - 1
            } else {
              return item;
            }
          }),
        },
      },
    };
    console.log(
      newState === this.state,
      newState.carsData === this.state.carsData,
      newState.carsData.cars === this.state.carsData.cars,
      newState.carsData.cars.sedan === this.state.carsData.cars.sedan,
      newState.carsData.cars.sedan[0] === this.state.carsData.cars.sedan[0],
      newState.carsData.cars.sedan[0].model ===
        this.state.carsData.cars.sedan[0].model,
      newState.carsData.cars.sedan[0].number ===
        this.state.carsData.cars.sedan[0].number,
      newState.carsData.cars.SUV === this.state.carsData.cars.SUV,
      newState.carsData.cars.SUV[0] === this.state.carsData.cars.SUV[0],
      newState.carsData.cars.sedan[1] === this.state.carsData.cars.sedan[1],
    ); //false, false, false, false, false,true,false, true, true, true
    /*     newState.carsData.cars[category][index].number =
      newState.carsData.cars[category][index].number - 1; //not mutating the original state */

    this.setState(newState);
    //this.setState()
  };

  render() {
    return (
      <div className="cars">
        <header>
          <h1>{`total inventory: ${this.state.carsData.totalNumber}`}</h1>
        </header>
        <div className="cars__container">
          <Sedan
            Sedan={this.state.carsData.cars.sedan}
            onSellCar={this.handleSellCar}
          />
          <SUV
            SUV={this.state.carsData.cars.SUV}
            onSellCar={this.handleSellCar}
          />
        </div>
      </div>
    );
  }
}

/* const cars = new Cars()
cars.handleSellCar

const obj1 = {

  func: cars.handleSellCar
}

obj1.func() */

export default Cars;
