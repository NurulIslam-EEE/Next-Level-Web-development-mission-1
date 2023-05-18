"use strict";
// keyof gurd
function add(param1, param2) {
    if (typeof param1 === "number" && typeof param2 === "number") {
        return param1 + param2;
    }
    else {
        return param1.toString() + param2.toString();
    }
}
function getUser(user) {
    if ("role" in user) {
        return `i am an admin my role ${user.role}`;
    }
    else {
        return `i am an normal user }`;
    }
}
const normalUser1 = { name: "mr x" };
const adminUser1 = { name: "mr x", role: "admin" };
console.log(getUser(normalUser1));
console.log(getUser(adminUser1));
// instanceof guard
class Animal2 {
    constructor(name, specias) {
        this.name = name;
        this.specias = specias;
    }
    makeSound() {
        console.log("I am making sound");
    }
}
class Dog extends Animal2 {
    constructor(name, specias) {
        super(name, specias);
    }
    makeBark() {
        console.log("i am barking");
    }
}
class Cat extends Animal2 {
    constructor(name, specias) {
        super(name, specias);
    }
    makeMew() {
        console.log("I am meawing");
    }
}
function isDog(animal) {
    return animal instanceof Dog;
}
function isCat(animal) {
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
function getAnimal(animal) {
    if (isDog(animal)) {
        animal.makeBark();
    }
    else if (isCat(animal)) {
        animal.makeMew();
    }
    else {
        animal.makeSound();
    }
}
const animal11 = new Dog("german ", "dog");
const animal2 = new Cat("german ", "cat");
getAnimal(animal2);
