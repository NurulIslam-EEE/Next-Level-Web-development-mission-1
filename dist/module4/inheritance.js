"use strict";
class Parent {
    constructor(name, age, address) {
        this.name = name;
        this.age = age;
        this.address = address;
    }
    makeSleep(hours) {
        return `this ${this.name} will sleep for ${hours}`;
    }
}
class Student extends Parent {
    //   name: string;
    //   age: number;
    //   address: string;
    constructor(name, age, address) {
        super(name, age, address);
        // this.name = name;
        // this.age = age;
        // this.address = address;
    }
}
const student1 = new Student("tanvir", 20, "naya");
class Teacher extends Parent {
    constructor(name, age, address, designation) {
        super(name, age, address);
        // this.name = name;
        // this.age = age;
        // this.address = address;
        this.designation = designation;
    }
    //   makeSleep(hours: number) {
    //     return `this ${this.name} will sleep for ${hours}`;
    //   }
    takeClasses(classes) {
        return `this ${this.name} will take ${classes}`;
    }
}
const teacher1 = new Teacher("", 20, "", "professor");
