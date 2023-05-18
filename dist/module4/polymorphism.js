"use strict";
class Person {
    takeNap() {
        console.log("Im sleeping 8 hour");
    }
}
class Student2 extends Person {
    takeNap() {
        console.log("im sleeping 10 hour a day");
    }
}
class Developer extends Person {
    takeNap() {
        console.log("im sleeping 5 hour a day");
    }
}
function getNap(param) {
    param.takeNap();
}
const person1 = new Person();
const person2 = new Student2();
const person3 = new Developer();
getNap(person1);
getNap(person2);
getNap(person3);
class Shape {
    getArea() {
        return 0;
    }
}
class Circle extends Shape {
    constructor(radius) {
        super();
        this.radius = radius;
    }
    getArea() {
        return Math.PI * this.radius * this.radius;
    }
}
class Rectangle extends Shape {
    constructor(height, width) {
        super();
        this.height = height;
        this.width = width;
    }
    getArea() {
        return this.width * this.height;
    }
}
function getAreaOfShape(param) {
    console.log(param.getArea());
}
getAreaOfShape(new Circle(10));
getAreaOfShape(new Rectangle(10, 2));
