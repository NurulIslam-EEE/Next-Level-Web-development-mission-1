class Animal {
//  public name: string;
  species: string;
  sound: string;


//   parameter properties
  constructor(public name: string, specis: string, sound: string) {
    // this.name = name;
    this.species = specis;
    this.sound = sound;
  }

  makeSound() {
    console.log(`The ${this.name} says ${this.sound}`);
  }
}


const dog=new Animal("German","dog","Gew gew")

const cat=new Animal("cattian","cat","mew mew")

dog.makeSound()

cat.makeSound()