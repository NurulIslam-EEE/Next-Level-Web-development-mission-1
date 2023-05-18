class BankAccount {
  id: number;
  name: string;
  private balance: number;

  constructor(id: number, name: string, balance: number) {
    this.name = name;
    this.id = id;
    this.balance = balance;
  }

  getBalance() {
    console.log(`my current balance ${this.balance}`);
  }

  addDeposit(amount: number) {
    this.balance = this.balance + amount;
  }
}


class StudentAccount extends BankAccount{

    test(){
      
    }
}

const myAccount = new BankAccount(20, "", 20);

console.log(myAccount);
