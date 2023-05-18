"use strict";
// ternary operator
var _a;
const age = 23;
// if(age>=18){
// console.log("yes")
// }else{
// console.log("no")
// }
const isAdult = age >= 18 ? "yes" : "no";
// console.log(isAdult)
// nullish coeslancing operator
// null and undefined
const isAuthenticated = "";
const username = isAuthenticated !== null && isAuthenticated !== void 0 ? isAuthenticated : "Guest";
const username2 = isAuthenticated ? isAuthenticated : "Guest";
console.log({ username }, { username2 });
const manush1 = {
    name: "",
    age: 22,
    address: {
        city: "No city",
        road: "No road"
    }
};
const home = (_a = manush1 === null || manush1 === void 0 ? void 0 : manush1.address.home) !== null && _a !== void 0 ? _a : "No home"; //default "no home"
console.log({ home });
