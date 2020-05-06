class Account {
    constructor(accountName, balance, key) {
        this.accountName = accountName;
        this.balance = Number(balance);
        this.key= key;
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
        let key =this.nextKey();
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
        let string = "";
        return string += `${Object.values(this.accountArray.reduce((a, b) => b.balance > a.balance ? b : a))}`;
    }

    smallestAccount() {
        let string = "";
        return string += `${Object.values(this.accountArray.reduce((a, b) => b.balance < a.balance ? b : a))}`;
    }
};

export default AccountController;