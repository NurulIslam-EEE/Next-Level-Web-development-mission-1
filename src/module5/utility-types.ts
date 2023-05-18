// pick

interface Person22 {
  name: String;
  email: string;
  contactNo: string;
}

type email = Pick<Person22, "email" | "name">;

// ommit

type Name22 = Omit<Person22, "email" | "contactNo">;

// partial and required

// to make all the properties be optional types

type Optional = Partial<Person22>;

type required = Required<Person22>;

const person555: Readonly<Person22> = {
  name: "",
  email: '"',
  contactNo: "01791010",
};

// record type

type myObj = {
  a: string;
  b: string;
  c: string;
};

// using index signature

type Obj = {
  [key: string]: string;
};

// record  "a"|""|"c"

// type myObj2=Record<string,string>
type myObj2=Record<"a"|"b"|"c",string>

const obj :myObj2= {
  a: "a",
  b: "c",
  c: "",
};
