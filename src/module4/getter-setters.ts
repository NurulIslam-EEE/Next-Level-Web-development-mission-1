class BankAccount2 {
  id: number;
  name: string;
  private balance: number;

  constructor(id: number, name: string, balance: number) {
    this.name = name;
    this.id = id;
    this.balance = balance;
  }

  // encapsolutation
  private getTestBalance():number{
    return this.balance
  }

  get Test():number{
    return this.getBalance()
  }
  // getter
  get _balance(): number {
    return this.balance;
  }

  getBalance(): number {
    console.log(`my current balance ${this.balance}`);
    return this.balance;
  }

  //setter

  set deposit(amount: number) {
    this.balance = this.balance + amount;
  }

//   addDeposit(amount: number) {
//     this.balance = this.balance + amount;
//   }
}

class StudentAccount2 extends BankAccount2 {
  test() {

  }
}

const myAccount2 = new BankAccount2(20, "", 20);



myAccount2.deposit=600

console.log(myAccount2._balance);
