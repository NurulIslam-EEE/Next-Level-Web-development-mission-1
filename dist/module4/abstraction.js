"use strict";
// interface
// interface IVehicle {
//   name: string;
//   model: string;
// }
class Car {
    constructor(name, brand, model) {
        this.name = name;
        this.brand = brand;
        this.model = model;
    }
    startEngine() {
        console.log("");
    }
    stopEngine() {
        console.log("im stoping ");
    }
    move() {
        console.log("im moving");
    }
    test() {
        console.log("im testing ");
    }
}
const vehicle1 = new Car("car", "toyota", "2023");
//  abstract class
class Vehicle2 {
    constructor(name, brand, model) {
        this.name = name;
        this.brand = brand;
        this.model = model;
    }
    move() {
        console.log("im moving");
    }
}
class Car2 extends Vehicle2 {
    startEngine() {
        console.log("im starting engine");
    }
    stopEngine() {
        console.log();
    }
}
