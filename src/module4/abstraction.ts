// interface
// interface IVehicle {
//   name: string;
//   model: string;
// }

// const vehicle: IVehicle = {
//   name: "c ar",
//   model: "292",
// };

interface Vehicle {
  startEngine(): void;
  stopEngine(): void;
  move(): void;
}

class Car implements Vehicle {
  constructor(
    public name: string,
    public brand: string,
    public model: string
  ) {}
  startEngine(): void {
    console.log("");
  }
  stopEngine(): void {
    console.log("im stoping ");
  }
  move(): void {
    console.log("im moving");
  }
  test() {
    console.log("im testing ");
  }
}

const vehicle1 = new Car("car", "toyota", "2023");

//  abstract class

abstract class Vehicle2 {
  constructor(
    public name: string,
    public brand: string,
    public model: string
  ) {}
  abstract startEngine(): void;
  abstract stopEngine(): void;
  move(): void {
    console.log("im moving");
  }
}

class Car2 extends Vehicle2 {
  startEngine(): void {
    console.log("im starting engine");
  }
  stopEngine(): void {
    console.log();
  }
}


