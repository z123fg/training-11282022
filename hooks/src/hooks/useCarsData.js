import {useState, useEffect, useCallback} from "react"
import { mockAPI } from "../mockAPI";

let externalData = 0;
const useCarsData = () =>{
  const [carsData, setCarsData] = useState(null);

  useEffect(()=>{
    mockAPI().then(data=>{
      console.log("data",data);
      setCarsData(data);
    })
  }, []);

  const memoizedHandleSellCar = useCallback((index, category) => {
    //console.log(externalData)
    setCarsData(prev=>({
      ...prev,
      cars:{
        ...prev.cars,
        [category]:[
          ...prev.cars[category].slice(0, index),
          {
            ...prev.cars[category][index],
            number: prev.cars[category][index].number - 1
          },
          ...prev.cars[category].slice(index + 1)
        ]
      },
      totalNumber: prev.totalNumber - 1
    }))
  },[])

  

  return [carsData, memoizedHandleSellCar]

 }


export default useCarsData