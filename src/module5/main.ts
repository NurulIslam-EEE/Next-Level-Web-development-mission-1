//  import { add2 as add3,subtract,multifly} from "./module";
// import * as methods from "./module";

// import add3 from "./utils/add";
// import multifly from "./utils/multifly";
// import subtract from "./utils/substract";

import methods from "./utils/index"
 
 const add2=(param1:number,param2:number)=>{

    return param1+param2
};

// const res=add3(2,3)

// const res=methods.add2(2,3)

// const res1=add3(1,2)
// const res2=multifly(2,3)
// const res3=subtract(2,3)

const res1=methods.add2(1,3)
const res2=methods.multifly(2,3)
const res3=methods.subtract(3,4)