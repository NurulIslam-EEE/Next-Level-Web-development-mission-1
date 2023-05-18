const arrayOfNumbers = [1, 2, 3, 4];

const arrayOfString = arrayOfNumbers.map((number) => number.toString());

console.log(arrayOfString);


type AreaNumber={
    height:number,
    width:Number
}

type Volume={
    height:number,
    width:Number,
    depth:number
}

type Area<T>={
    // [key in keyof Volume]:Volume[key]
    [key in keyof T]:T[key]
}

const area1:Area<{height:number,width:number}>={height:4,width:5}

type AreString={
    height:string,
    width:String
}

type AreaReadOnly={
   readonly height:number,
   readonly width:Number  
}

const reactangularArea:AreaReadOnly={
    height:30,
    width:40
}


type AA=AreaNumber["height"]
type B=keyof AreaNumber