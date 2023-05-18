"use strict";
const addMeInMyCrush2 = (myInfo) => {
    const crush = "kate";
    const newData = Object.assign(Object.assign({}, myInfo), { crush });
    return newData;
};
const myInfo2 = {
    name: "tanvir",
    age: 100,
    salary: 1000,
};
const result222 = addMeInMyCrush2(myInfo2);
