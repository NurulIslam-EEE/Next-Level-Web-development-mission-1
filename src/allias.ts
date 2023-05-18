
type CrushType={
    name: string;
    age?: number;
    profession: string;
    address: string;
}

// const crush1: CrushType{

// } = {
//   name: "",
//   age: 23,
//   profession: "web",
//   address: "",
// };


const crush2: CrushType = {
    name: "",

    profession: "web",
    address: "mexico",
  };

type CrushMarriedType=boolean;

  const isCrushedMarried:CrushMarriedType=false

  type CourseNameType=string

  const courseName:CourseNameType=""

  type OperationType= (x:number,y:number)=>number

//   const calculate=(number1:number,number2:number,operation:(x:number,y:number)=>number)=>{
// return operation(number1,number2)
//   }

const calculate=(number1:number,number2:number,operation:OperationType)=>{
    return operation(number1,number2)
      }

  calculate(10,20,(x,y)=>x+y)
  calculate(10,20,(x,y)=>x-y)
  calculate(10,20,(x,y)=>x*y)