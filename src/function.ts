// normal function

function add(num1: number, num2: number) {
  return num1 + num1;
}

const addArrow = (num1: number, num2: number = 0) => num1 + num2;

const arr = [1, 2, 3];

const newArray = arr.map((elem) => elem * elem);

const person: {
  name: string;
  balance: number;
  addBalance(money: number): string;
} = {
  name: "nurul",
  balance: 200,
  addBalance(money: number) {
    return `My new balance is ${this.balance + money}`;
  },
};

// spread operator

const myFriend = ["rabbi", "abdullah", "rasel"];
const newFriend = ["x", "y", "z"];
const myBestFriend={
    fullName:"rabbi",
    age:24

}

const [bestFriend]=myFriend;
const {fullName: myFullName}=myBestFriend

// myFullName is not type 

console.log(myFullName)

myFriend.push(...newFriend);
// console.log(myFriend);

// rest parameter
// const greetFriend = (friend1: string, friend2: string, friend3: string):void =>
//   console.log(`Hi ${friend1}\n Hi ${friend2} \n hi ${friend3}`);

const greetFriend = (...friends: string[]):void =>friends.forEach(friend => {
    // console.log(`Hi ${friend}`);
});


  greetFriend("kasem","jasim","roni","abdul","korim","forhad")
