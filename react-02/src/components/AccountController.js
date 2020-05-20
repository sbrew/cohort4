class Account {
    constructor(accountName, balance, key) {
        this.accountName = accountName;
        this.balance = Number(balance);
        this.key = key;
    }

    deposit(depAmount) {
        this.balance = (((this.balance * 100) + (depAmount * 100)) / 100);
    }

    withdraw(withAmount) {
        this.balance = (((this.balance * 100) - (withAmount * 100)) / 100);
    }

    getBalance() {
        return this.balance;
    }
};

class AccountController {
    constructor() {
        this.accountArray = [];
        this.counter = 1;
    }

    nextKey() {
        return this.counter++;
    }

    addAccount(accountName, balance) {
        let key = this.nextKey();
        this.accountArray.push(new Account(accountName, balance, key));
        return this.accountArray;
    }

    accountFinder(name) {
        let index = this.accountArray.findIndex(accFinder => accFinder.accountName === name);
        return this.accountArray[index];
    }

    getBalance(name) {
        return this.accountFinder(name).getBalance();
    }

    accountDeposit(name, amount) {
        this.accountFinder(name).deposit(amount);
    }

    accountWithdraw(name, amount) {
        this.accountFinder(name).withdraw(amount);
    }

    removeAccount(accObj) {
        let index = this.accountArray.findIndex(accFinder => accFinder.accountName === accObj);
        this.accountArray.splice(index, 1);
    }

    totalCash() {
        let sum = 0;
        for (var i = 0; i < this.accountArray.length; i++) {
            sum = sum + this.accountArray[i].balance;
        }
        return sum;
    }

    biggestAccount() {
        let biggest = 0;
        for (var i = 0; i < this.accountArray.length; i++) {
            if (biggest < this.accountArray[i].balance) {
                biggest = this.accountArray[i].balance;
            }
        }
        return biggest;
    }

    smallestAccount() {
        let smallest=0;
        for (var i = 0; i < this.accountArray.length; i++) {
            smallest = this.accountArray[0].balance;
            if (this.accountArray.length === 0) {
                smallest = 0;
                return smallest;
            } 
            if (smallest > this.accountArray[i].balance) {
                smallest = this.accountArray[i].balance;
            }
        }
        return smallest;
    }
};

export default {AccountController, Account};


