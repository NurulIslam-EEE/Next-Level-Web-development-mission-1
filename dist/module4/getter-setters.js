"use strict";
class BankAccount2 {
    constructor(id, name, balance) {
        this.name = name;
        this.id = id;
        this.balance = balance;
    }
    // encapsolutation
    getTestBalance() {
        return this.balance;
    }
    get Test() {
        return this.getBalance();
    }
    // getter
    get _balance() {
        return this.balance;
    }
    getBalance() {
        console.log(`my current balance ${this.balance}`);
        return this.balance;
    }
    //setter
    set deposit(amount) {
        this.balance = this.balance + amount;
    }
}
class StudentAccount2 extends BankAccount2 {
    test() {
    }
}
const myAccount2 = new BankAccount2(20, "", 20);
myAccount2.deposit = 600;
console.log(myAccount2._balance);
