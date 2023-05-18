type User = {
  name: string;
  age: number;
};

type extendedUser = User & {
  role: string;
};

interface IUser {
  name: string;
  age: number;
}

interface IExtendedUser extends IUser {
  role: string;
}

// object, function,array

type addNumberType = (num1: number, num2: number) => number;

interface IAddNumber {
  (num1: number, num2: number): Number;
}

// array
type rollNumberType = number[];

interface IRollNumber {
  [index: number]: number;
}

const rollNumber2: IRollNumber = [1, 4.3];

const addNumber: addNumberType = (num1, num2) => num1 + num2;

const use: IExtendedUser = {
  name: "",
  age: 23,
  role: "admin",
};

const userWithTypeAlias: User = {
  name: "",
  age: 23,
};

const userWithTypeInterface: IUser = {
  name: "",
  age: 23,
};
