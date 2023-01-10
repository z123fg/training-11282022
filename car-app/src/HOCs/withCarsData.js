import React from "react";
import { mockAPI } from "../mockAPI";


const withCarsData = (WrappedComponent) => {
  return class WrapperComponent extends React.Component{
    state={
      carsData:{

      }
    }
    

    handleSellCar = (index, category) => {
      if (this.state.carsData.cars[category][index].number === 0) return;
      this.setState((prev) => {
        return {
          ...prev,
          carsData: {
            ...prev.carsData,
            cars: {
              ...prev.carsData.cars,
              [category]: [
                ...prev.carsData.cars[category].slice(0, index),
                {
                  ...prev.carsData.cars[category][index],
                  number: prev.carsData.cars[category][index].number - 1,
                },
                ...prev.carsData.cars[category].slice(index + 1),
              ],
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
            totalNumber: prev.carsData.totalNumber - 1,
          },
        };
      });
    };

    async componentDidMount(){
      const data = await mockAPI();
      this.setState({carsData:data});
    }
    render(){
      return (
        <WrappedComponent {...this.props} carsData={this.state.carsData} handleSellCar={this.handleSellCar}/>
      )
    }
  }
}

export default withCarsData;