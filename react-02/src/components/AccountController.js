class Account {
    static lastKey = 0;
    constructor(obj) {
        const defaults = { accountName: "", balance: "", key: "" }
        const data = { ...defaults, ...obj };
        this.accountName = data.accountName;
        this.balance = data.balance;
        this.key = data.key;
    }
    newKey() {
        Account.lastKey++;
        this.key = Account.lastKey;
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
        this.accounts = {};
        this.lastKey = 1;
    }

    getNewAccount() {
        return new Account({});
    }

    length() {
        return Object.keys(this.accounts).length;
    }

    getAccount(key) {
        return this.accounts[key];
    }

    getAccountName(name) {
        for (let key in this.accounts) {
            if (name === this.accounts[key].accountName) {
                return this.accounts[key].accountName;
            }
        }
    }

    nextKey() {
        return this.lastKey++;
    }

    addAccount(newAccount) {
        if (newAccount.accountName.length === 0) {
            return 'Account name can not be blank';
        } else if (this.getAccountName(newAccount.accountName) === newAccount.accountName) {
            return 'Can not create a duplicate account';
        } else if (newAccount.balance === 0) {
            return 'Can not create an empty account';
        } else {
            newAccount.key = this.nextKey();
            this.accounts[newAccount.key] = newAccount
        }
    }

    // accountDeposit(name, amount) {
    //     for (let key in this.accounts) {
    //         if (name === this.accounts[key].accountName) {
    //             this.accounts[key].balance = this.accounts[key].balance + amount;
    //             return this.accounts[key].balance;
    //         }
    //     }
    // }

    accountDeposit(key, amount) {
        let depositing = this.getAccount(key)
        depositing.balance = depositing.balance + amount;
        console.log(this.accounts[key])
        return this.accounts[key].balance;
    }


    accountWithdraw(key, amount) {
        let withdrawing = this.getAccount(key)
        withdrawing.balance = withdrawing.balance - amount;
        return this.accounts[key].balance;
    }

    removeAccount(key) {
        delete this.accounts[key];
    }

    totalCash() {
        let sum = 0;
        for (let key in this.accounts) {
            sum += Number(this.accounts[key].balance)
        }
        return sum;
    }

    biggestAccount() {
        let biggest = 0;
        for (let key in this.accounts) {
            if (this.accounts[key].balance > biggest) {
                biggest = this.accounts[key].balance;
            }
        }
        return biggest;
    }

    smallestAccount() {
        let smallest = Number.POSITIVE_INFINITY;
        if (this.length() === 0) {
            smallest = 0;
        } else {
            for (let key in this.accounts) {
                if (smallest > this.accounts[key].balance) {
                    smallest = this.accounts[key].balance;
                }
            }
        }
        return smallest;
    }
};

export default { AccountController, Account };


