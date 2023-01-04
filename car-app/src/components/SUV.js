import React from "react";
class SUV extends React.Component {

  shouldComponentUpdate(nextProps, nextState){
    console.log("SUV scu")
    if(nextProps.SUV === this.props.SUV){
      return false
    }else{
      return true
    }
  }
  render() {
    console.log("SUV component is rendering")
    const { SUV, onSellCar } = this.props;
    return (
      <div>
        {SUV.map((item, index) => {
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

export default SUV;