"use strict";
// const crush1: CrushType{
// } = {
//   name: "",
//   age: 23,
//   profession: "web",
//   address: "",
// };
const crush2 = {
    name: "",
    profession: "web",
    address: "mexico",
};
const isCrushedMarried = false;
const courseName = "";
//   const calculate=(number1:number,number2:number,operation:(x:number,y:number)=>number)=>{
// return operation(number1,number2)
//   }
const calculate = (number1, number2, operation) => {
    return operation(number1, number2);
};
calculate(10, 20, (x, y) => x + y);
calculate(10, 20, (x, y) => x - y);
calculate(10, 20, (x, y) => x * y);
