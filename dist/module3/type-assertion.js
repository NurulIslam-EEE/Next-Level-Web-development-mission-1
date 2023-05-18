"use strict";
let emni;
emni = "Next level";
// (emni as string).length;
emni.length;
function kgToGm(param) {
    if (typeof param === "string") {
        const value = parseFloat(param) * 1000;
        return ` ${value}`;
    }
    if (typeof param === "number") {
        const value = param * 1000;
        return `${value}`;
    }
}
// const resultToBeNumber=kgToGm(1000) as number
const resultToBeNumber = kgToGm(1000);
// const resultToBeString=kgToGm(1000) as string;
const resultToBeString = kgToGm(1000);
