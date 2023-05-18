"use strict";
function repeatNumber(param1, param2 = 3) {
    console.log(param2);
    let loop = 0;
    while (loop < param2) {
        console.log(param1);
        loop++;
    }
}
repeatNumber("we can do it", 7);
