"use strict";
class BankAccount {
    constructor(id, name, balance) {
        this.name = name;
        this.id = id;
        this.balance = balance;
    }
    getBalance() {
        console.log(`my current balance ${this.balance}`);
    }
    addDeposit(amount) {
        this.balance = this.balance + amount;
    }
}
class StudentAccount extends BankAccount {
    test() {
    }
}
const myAccount = new BankAccount(20, "", 20);
console.log(myAccount);
