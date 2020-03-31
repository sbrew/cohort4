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
  
    getBalance(name){
        let index = this.accountArray.findIndex(accFinder => accFinder.accountName === name);
        return this.accountArray[index].getBalance();
    }

    accountDeposit(name, amount) {
        let index = this.accountArray.findIndex(accFinder => accFinder.accountName === name);
        this.accountArray[index].deposit(amount);
    }

    accountWithdraw(name, amount) {
        let index = this.accountArray.findIndex(accFinder => accFinder.accountName === name);
        this.accountArray[index].withdraw(amount);
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

const functions = {

    buildDomCards(node, text) {
        const div = document.createElement('div');
        div.setAttribute('class', 'clCard');//applying premade css to new divs
        div.setAttribute('id', text.accountName);
        div.appendChild(document.createTextNode(text.accountName));
        //creating a ptag for balance to easily update balances with deposits and withdraws
        let pTag = document.createElement('P');
        //using `ptag ${text.accountName}` to associate specifc ids while not creating conflict with other id tags
        pTag.setAttribute('id', `ptag ${text.accountName}`);
        pTag.appendChild(document.createTextNode(text.balance));
        div.appendChild(pTag);

        const delBut = document.createElement('button');
        delBut.appendChild(document.createTextNode("Close Account"));
        div.appendChild(delBut);
        node.parentElement.insertBefore(div, node);
        return div;
    },

    dropDownOptions(text) {
        const options = document.createElement('OPTION');
        options.setAttribute('id', text.accountName);
        options.appendChild(document.createTextNode(text.accountName));
        return options;
    },

    attachToDD(node, text) {
        const options = functions.dropDownOptions(text);
        console.log(node);
        node.appendChild(options, node);
    },

    deleteDiv(node) {
        node.remove();
    },
};

export default { Account, AccountController, functions };