import React, {useState, useEffect, useCallback} from "react";
import useCarsData from "../hooks/useCarsData";
import { mockAPI } from "../mockAPI";
import Sedan from "./Sedan";
import SUV from "./SUV";

//HOC: drawback, hoc hell, functional and class
//custom hooks, functional component

//memoization
//useMemo(value), useCallback(callback), react.memo(component)
//useRef, 

let temp;
const Cars = () => {
  const [carsData, handleSellCar] = useCarsData();
  
  const func = () =>{

  }
  console.log(temp === func, temp, func)
  temp = func
  return (
    <div className="cars">
        <header>
          <h1>{`total inventory: ${carsData?.totalNumber}`}</h1>
        </header>
        <div className="cars__container">
          <Sedan
            Sedan={carsData?.cars?.sedan}
            onSellCar={handleSellCar}
          />
          <SUV
            SUV={carsData?.cars?.SUV}
            onSellCar={handleSellCar}
          />
        </div>
      </div>
  )
}


export default Cars ;
