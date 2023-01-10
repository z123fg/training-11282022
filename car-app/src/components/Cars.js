import React from "react";
import withCarsData from "../HOCs/withCarsData";
import { mockAPI } from "../mockAPI";
import Sedan from "./Sedan";
import SUV from "./SUV";

class Cars extends React.Component {



  /* 
    state/props, forceUpdate, parent

    rendering: generate vd, diffing, reconcilation(actual dom)
  */

 
//reference error: cannot read sedan from undefined
  render() {
    return (
      <div className="cars">
        <header>
          <h1>{`total inventory: ${this.props.carsData.totalNumber}`}</h1>
        </header>
        <div className="cars__container">
          <Sedan
            Sedan={this.props.carsData.cars?.sedan}
            onSellCar={this.props.handleSellCar}
          />
          <SUV
            SUV={this.props.carsData.cars?.SUV}
            onSellCar={this.props.handleSellCar}
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

export default withCarsData(Cars) ;
