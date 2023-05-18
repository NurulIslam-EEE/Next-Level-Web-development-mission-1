class Person {
  takeNap(): void {
    console.log("Im sleeping 8 hour");
  }
}

class Student2 extends Person {
  takeNap(): void {
    console.log("im sleeping 10 hour a day");
  }
}

class Developer extends Person {
  takeNap(): void {
    console.log("im sleeping 5 hour a day");
  }
}

function getNap(param: Person) {
  param.takeNap();
}

const person1 = new Person();
const person2 = new Student2();
const person3 = new Developer();

getNap(person1);
getNap(person2);
getNap(person3);

class Shape {
  getArea(): number {
    return 0;
  }
}

class Circle extends Shape {
  radius: number;
  constructor(radius: number) {
    super();
    this.radius = radius;
  }

  getArea(): number {
    return Math.PI * this.radius * this.radius;
  }
}

class Rectangle extends Shape {
  height: number;
  width: number;
  constructor(height: number, width: number) {
    super();
    this.height = height;
    this.width = width;
  }

  getArea(): number {
    return this.width * this.height;
  }
}

function getAreaOfShape(param: Shape) {
  console.log(param.getArea());
}

getAreaOfShape(new Circle(10))
getAreaOfShape(new Rectangle(10,2))