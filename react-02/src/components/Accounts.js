import React from 'react';


class Account {
    constructor(accountName, balance) {
        this.accountName = accountName;
        this.balance = balance;
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
    }

    addAccount(accountName, balance) {
        this.accountArray.push(new Account(accountName, balance));
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

class AccountsUI extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    render() {
        return (
            <div className="AccountPage" >
                <div id="newAccount">

                    <h1>Bank of EvolveU</h1>
        Account Name: <input id="accountName" type="text" />
        Initial deposit: <input id="initialDeposit" type="number" />
                    <button id="createAccount">Add Account</button>
                </div>

                <div id="updateAccount">
                    <input id="update" type="number" />
                    <button id="deposit">Deposit</button>
                    <button id="withdraw">withdraw</button>
        Select Account <select id="dropdownID" name="dropdown">
                        <option defaultValue="">Select</option>
                    </select>
                    <h2>Accounts and Balances</h2>
                    <div id="showBalanceID" className="clCard">
                        For All your Banking needs!
                    </div>
                    <div id="arrayTasks">
                        <button id='sumArr'>Total Value of Accounts</button>
                        <button id="lowest">Lowest Value Account</button>
                        <button id="biggest">Highest Value Account</button>
                        <p id="messageArea"></p>
                    </div>
                </div>
            </div>
        );
    }
}
export default AccountsUI;

