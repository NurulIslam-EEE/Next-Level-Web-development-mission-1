// generic interface

interface CrushInterface<T, U = null> {
  name: string;
  husband: T;
  wife?: U;
}

interface PersonInterface {
  name: string;
  age: number;
}

const crush4: CrushInterface<PersonInterface, object> = {
  name: "kate",
  husband: { name: "", age: 23 },
  wife: { name: "", age: 23 },
};

const crush11: CrushInterface<boolean> = {
  name: "",
  husband: true,
};

const crush22: CrushInterface<string> = {
  name: "",
  husband: "",
};

interface HusbandInterface {
  name: string;
  salary: number;
}
const crush33: CrushInterface<HusbandInterface> = {
  name: "",
  husband: {
    name: "",
    salary: 200,
  },
};
