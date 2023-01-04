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
          {
            id: 2,
            model: "accord",
            number: 2,
          }
        ],
        SUV: [
          {
            id: 3,
            model: "escape",
            number: 1,
          },
        ],
      },
      totalNumber: 4,
    },
  };

  /* 
    state/props, forceUpdate, parent

    rendering: generate vd, diffing, reconcilation(actual dom)
  */

  handleSellCar = (index, category) => {
    if(this.state.carsData.cars[category][index].number === 0) return;
    this.setState(prev=>{
      return {
        ...prev,
        carsData:{
          ...prev.carsData,
          cars:{
            ...prev.carsData.cars,
            [category]:[
              ...prev.carsData.cars[category].slice(0, index),
              {
                ...prev.carsData.cars[category][index],
                number: prev.carsData.cars[category][index].number - 1
              },
              ...prev.carsData.cars[category].slice(index+1)
            ]
            /* 
              prev.carsData.cars[category].map((item, innerIndex)=>{
                if(index === innerIndex){
                  return {
                    ...prev.carsData.cars[category][index],
                    number: prev.carsData.cars[category][index].number - 1
                  }
                }else{
                  return item;
                }
              })
            */
          },
          totalNumber: prev.carsData.totalNumber - 1
        }
      }
    })
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
