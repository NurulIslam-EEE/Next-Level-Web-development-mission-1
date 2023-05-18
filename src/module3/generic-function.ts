const createArray = (param: string): string[] => {
  return [param];
};

const createArray1 = <T>(param: T): T[] => {
  return [param];
};




const createArray2 = <X, Y>(param: X, param2: Y): [X, Y] => {
  return [param, param2];
};

function createArray22 <X,Y>(param: X,param2:Y): [X,Y]  {
    return [param,param2];
  };

const result = createArray("Bangladesh");

const result2 = createArray1<string>("Bangladesh");
const result4 = createArray2<string, string>("Bangladesh", "khulna");

type Name = {
  name: string;
};
const result3 = createArray1<Name>({ name: "bangladesh" });


// spred operator

const crush="kate winslate";



//  const newData={...myInfo,crush

// const addMeInMyCrush=(myInfo:Object)=>{
//     const crush="kate";

//     const newData={...myInfo,crush}

//     return newData
// }

const addMeInMyCrush=<T>(myInfo:T)=>{
    const crush="kate";

    const newData={...myInfo,crush}

    return newData
}

const myInfo={
    name:"tanvir",
    age:100,
    salary:1000
}

const result22=addMeInMyCrush(myInfo)
