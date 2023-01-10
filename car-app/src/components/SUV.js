import React from "react";
import withLogs from "../HOCs/withLogs";
import { MyPureComponent } from "./Sedan";
class SUV extends MyPureComponent {

  // shouldComponentUpdate(nextProps, nextState){
  //   console.log("SUV scu")
  //   if(nextProps.SUV === this.props.SUV){
  //     return false
  //   }else{
  //     return true
  //   }
  // }

  /* componentDidUpdate(){
    console.log("a car is sold")
  } */
  render() {
    console.log("SUV component is rendering")
    const { SUV, onSellCar } = this.props;
    return (
      <div>
        {SUV?.map((item, index) => {
          return (
            <div key={item.id}>
              <div>{item.model}</div>
              <div>{item.number}</div>
              <button onClick={()=>{onSellCar(index, "SUV")}}>{`sell 1 ${item.model}`}</button>
            </div>
          );
        })}
      </div>
    );
  }
}

export default withLogs(SUV);