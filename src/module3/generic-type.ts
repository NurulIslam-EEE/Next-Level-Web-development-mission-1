type GenericTuple<X, Y> = [X, Y];

const relation: GenericTuple<string, String> = ["tanvir", "kate winslate"];

type relationWithSalaryType = {name: string;salary: number;};

interface relationWithSalaryInterface{
    name: string;salary: number
}

// const relationWithSalary: GenericTuple<
//   { name: string; salary: number },
//   string
// > = [
//   {
//     name: "",
//     salary: 78,
//   },
//   "vabab",
// ];

const relationWithSalary: GenericTuple<relationWithSalaryType, string> = [
  {
    name: "",
    salary: 78,
  },
  "vabab",
];

type GenericArray<T> = Array<T>;

// const rollNumbers: Array<number> = [1, 2];
const rollNumbers: GenericArray<number> = [1, 2];

// const rollNumbers2: Array<string> = ["", ""];
const rollNumbers2: GenericArray<string> = ["", ""];

// const rollNumbers3: Array<boolean> = [false];
const rollNumbers3: GenericArray<boolean> = [false];

// const userNameAndRollNumber: Array<{ name: string; roll: number }> = [
//   {
//     name: "",
//     roll: 3,
//   },
// ];

type NameAndRollType = {
  name: string;
  roll: number;
};

const userNameAndRollNumber: GenericArray<NameAndRollType> = [
  {
    name: "",
    roll: 3,
  },
];
