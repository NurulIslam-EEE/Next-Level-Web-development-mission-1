"use strict";
class Animal {
    //   parameter properties
    constructor(name, specis, sound) {
        this.name = name;
        // this.name = name;
        this.species = specis;
        this.sound = sound;
    }
    makeSound() {
        console.log(`The ${this.name} says ${this.sound}`);
    }
}
const dog = new Animal("German", "dog", "Gew gew");
const cat = new Animal("cattian", "cat", "mew mew");
dog.makeSound();
cat.makeSound();
