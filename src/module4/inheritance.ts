class Parent {
  name: string;
  age: number;
  address: string;
  constructor(name: string, age: number, address: string) {
    this.name = name;
    this.age = age;
    this.address = address;
  }

  makeSleep(hours: number) {
    return `this ${this.name} will sleep for ${hours}`;
  }
}

class Student extends Parent {
  //   name: string;
  //   age: number;
  //   address: string;
  constructor(name: string, age: number, address: string) {
    super(name, age, address);
    // this.name = name;
    // this.age = age;
    // this.address = address;
  }

  //   makeSleep(hours: number) {
  //     return `this ${this.name} will sleep for ${hours}`;
  //   }
}

const student1 = new Student("tanvir", 20, "naya");

class Teacher extends Parent {
  //   name: string;
  //   age: number;
  //   address: string;
  designation: string;
  constructor(name: string, age: number, address: string, designation: string) {
    super(name, age, address);
    // this.name = name;
    // this.age = age;
    // this.address = address;
    this.designation = designation;
  }

//   makeSleep(hours: number) {
//     return `this ${this.name} will sleep for ${hours}`;
//   }

  takeClasses(classes: number) {
    return `this ${this.name} will take ${classes}`;
  }
}


const teacher1=new Teacher("",20,"","professor")
