"use strict";
const searchName = (value) => {
    if (value == null) {
        console.log("thesre is nothing to  search");
    }
    else {
        console.log("Searching");
    }
};
searchName(null);
// km^-1---->ms^-1
const getMyCarSpeed = (speed) => {
    if (typeof speed === "number") {
        const convertedSpeed = (speed * 1000) / 3600;
        console.log(`my speed is ${convertedSpeed}`);
    }
    if (typeof speed === "string") {
        const [value, unit] = speed.split(" ");
        const convertedSpeed = (parseFloat(value) * 1000) / 3600;
        console.log(`my speed is ${convertedSpeed}`);
    }
    else {
        console.log("there is wrong type");
    }
};
getMyCarSpeed(20);
getMyCarSpeed("50 kmh-1");
getMyCarSpeed(true);
function throwError(message) {
    throw new Error(message);
}
throwError("error hoyse");
