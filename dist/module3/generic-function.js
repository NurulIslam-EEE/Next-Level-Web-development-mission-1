"use strict";
const createArray = (param) => {
    return [param];
};
const createArray1 = (param) => {
    return [param];
};
const createArray2 = (param, param2) => {
    return [param, param2];
};
function createArray22(param, param2) {
    return [param, param2];
}
;
const result = createArray("Bangladesh");
const result2 = createArray1("Bangladesh");
const result4 = createArray2("Bangladesh", "khulna");
const result3 = createArray1({ name: "bangladesh" });
// spred operator
const crush = "kate winslate";
//  const newData={...myInfo,crush
// const addMeInMyCrush=(myInfo:Object)=>{
//     const crush="kate";
//     const newData={...myInfo,crush}
//     return newData
// }
const addMeInMyCrush = (myInfo) => {
    const crush = "kate";
    const newData = Object.assign(Object.assign({}, myInfo), { crush });
    return newData;
};
const myInfo = {
    name: "tanvir",
    age: 100,
    salary: 1000
};
const result22 = addMeInMyCrush(myInfo);
