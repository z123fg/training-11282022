export const mockAPI = () => {
  return new Promise((res, rej)=>{
    setTimeout(()=>{
      res({
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
        totalNumber: 4
      })
    },1000)
  })
}