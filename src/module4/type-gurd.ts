// keyof gurd

type Alphanumeric = string | number;

function add(param1: number, param2: Alphanumeric): Alphanumeric {
  if (typeof param1 === "number" && typeof param2 === "number") {
    return param1 + param2;
  } else {
    return param1.toString() + param2.toString();
  }
}

type NormalUserType = {
  name: string;
};

type AdminUserType = {
  name: string;
  role: "admin";
};

function getUser(user: NormalUserType | AdminUserType) {
  if ("role" in user) {
    return `i am an admin my role ${user.role}`;
  } else {
    return `i am an normal user }`;
  }
}
const normalUser1: NormalUserType = { name: "mr x" };
const adminUser1: AdminUserType = { name: "mr x", role: "admin" };

console.log(getUser(normalUser1));
console.log(getUser(adminUser1));

// instanceof guard

class Animal2 {
  name: string;
  specias: string;

  constructor(name: string, specias: string) {
    this.name = name;
    this.specias = specias;
  }

  makeSound() {
    console.log("I am making sound");
  }
}

class Dog extends Animal2 {
  constructor(name: string, specias: string) {
    super(name, specias);
  }

  makeBark() {
    console.log("i am barking");
  }
}

class Cat extends Animal2 {
  constructor(name: string, specias: string) {
    super(name, specias);
  }

  makeMew() {
    console.log("I am meawing");
  }
}

function isDog(animal: Animal2): animal is Dog {
  return animal instanceof Dog;
}

function isCat(animal: Animal2): animal is Cat {
  return animal instanceof Cat;
}

// function getAnimal(animal: Animal2) {
//   if (animal instanceof Dog) {
//     animal.makeBark();
//   } else if (animal instanceof Cat) {
//     animal.makeMew();
//   } else {
//     animal.makeSound();
//   }
// }

function getAnimal(animal: Animal2) {
  if (isDog(animal)) {
    animal.makeBark();
  } else if (isCat(animal)) {
    animal.makeMew();
  } else {
    animal.makeSound();
  }
}
const animal11 = new Dog("german ", "dog");
const animal2 = new Cat("german ", "cat");

getAnimal(animal2);
