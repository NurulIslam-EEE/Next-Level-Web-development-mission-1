"use strict";
function greaterOrEqual(param) {
    const filtered = param.filter((item) => {
        return item.age >= 18;
    });
    return filtered;
}
const data = greaterOrEqual([{ name: "nurul", age: 3 }, { name: "islam", age: 23 }]);
console.log(data);
