class Account {
    constructor(accountName, initialBalance) {
        this.accountName = accountName;
        this.initialBalance = initialBalance;
    }

    deposit(amount) {
        this.initialBalance = this.initialBalance + amount;
    }

    withdraw(amount) {
        this.initialBalance =  this.initialBalance - amount;
    }

    balance() {
        return this.initialBalance;
    }
};

export default {Account};