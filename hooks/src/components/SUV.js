import React, {memo} from "react";

/* 
  PureComponent, shouldComponentUpdate: preventing unnecessary rendering
  React.Memo: function, args: component, comparison function(prevprops, nextprops), returns component
  React.memo higher order component


*/
const SUV = memo(({ SUV, onSellCar }) => {
  console.log("SUV render")
  return (
    <div>
      {SUV?.map((item, index) => {
        return (
          <div key={item.id}>
            <div>{item.model}</div>
            <div>{item.number}</div>
            <button
              onClick={() => {
                onSellCar(index, "SUV");
              }}
            >{`sell 1 ${item.model}`}</button>
          </div>
        );
      })}
    </div>
  );
});

export default SUV;
