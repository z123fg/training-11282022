import React,{memo} from "react";

//props: object, 2, Sedan, onSellCar
const Sedan = memo(({Sedan, onSellCar}) => {
  console.log("Sedan render")
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
});

export default Sedan;
