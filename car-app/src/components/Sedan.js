import React from "react";
//shallow comparison, shallow copy
//React.PureComponent, shallow comparison
class Sedan extends React.Component {

  shouldComponentUpdate(nextProps, nextState){
    console.log("Sedan scu")
    if(nextProps.Sedan === this.props.Sedan){
      return false
    }else{
      return true
    }
  }
  render() {
    console.log("sedan component is rendering", this.props)//0
    const { Sedan, onSellCar } = this.props;
    return (
      <div>
        {Sedan.map((item, index) => {
          return (
            <div key={item.id}>
              <div>{item.model}</div>
              <div>{item.number}</div>
              <button onClick={()=>{onSellCar(index, "sedan")}}>{`sell 1 ${item.model}`}</button>
            </div>
          );
        })}
      </div>
    );
  }
}

export default Sedan;
