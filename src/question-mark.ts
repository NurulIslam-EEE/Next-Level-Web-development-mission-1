// ternary operator

const age:number=23;

// if(age>=18){
// console.log("yes")
// }else{
// console.log("no")
// }

const isAdult=age>=18?"yes":"no"
// console.log(isAdult)

// nullish coeslancing operator
// null and undefined

const isAuthenticated=""
const username=isAuthenticated??"Guest"
const username2=isAuthenticated?isAuthenticated:"Guest"

console.log({username},{username2})

type Manush={
    name:string,
    age:number,
    address:{
        city:"No city",
        road:"No road",
        home?:""
    }
}


const manush1:Manush={
name:"",
age:22,
address:{
    city:"No city",
    road:"No road"
}
}

const home=manush1?.address.home??"No home"  //default "no home"
console.log({home})