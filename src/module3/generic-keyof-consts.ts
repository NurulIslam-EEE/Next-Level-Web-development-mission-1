
type PersonType={
    name:string,
    age:number,
    address:string
}

type newType="name"|"age"|"address"

type newTypeUsingKey=keyof PersonType

// const a:newType="age"
// const b:newTypeUsingKey="age"


function getProperty<X,Y extends keyof X>(obj:X,key:Y){
obj[key]
}

const result33=getProperty({name:"ratul",age:100},"age")