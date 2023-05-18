// function generateAdder(a: number): (b: number) => number {

//     return function(b: number) {
  
//       return a + b;
  
//     };
  
//   }
  
  
  
//   const addTwo = generateAdder(2);
  
//   console.log(addTwo(3));
  
//   console.log(addTwo(5));

// function getArrayItem<T, K extends keyof T>(arr: T[], index: number, key: K): T[K] {

//   const item = arr[index];

//   return item[key];

// }



// const users2 = [ { name: 'John', age: 30 }, { name: 'Mary', age: 25 },];

// console.log(getArrayItem(users2, 0, 'name'))

// 3333

// type Data = { num1: number }



// type B = {

//   [key in keyof Data]: string;

// }

// const numbers:B = {

//   num1: 20

// }

// console.log(numbers)


interface Person {

  firstName: string;

  lastName: string;

}



// function fullName<T extends Person>(person: T): string {

//   return `${person.firstName} ${person.lastName}`;

// }

// const data3=fullName()


  
  