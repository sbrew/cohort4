class Account {
    constructor(accountName, initialBalance) {
        this.accountName = accountName;
        this.initialBalance = initialBalance;
    }

    deposit(depAmount) {
        this.initialBalance = (((this.initialBalance * 100) + (depAmount * 100)) / 100);
    }

    withdraw(withAmount) {
        this.initialBalance = (((this.initialBalance * 100) - (withAmount * 100)) / 100);
    }

    balance() {
        return this.initialBalance;
    }
};

class AccountController {
    constructor() {
        this.accountArray = [];
    }

    addAccount(accObj) {
        this.accountArray.push(accObj);
        return this.accountArray;
    }

    removeAccount(accObj) {
        let index = this.accountArray.findIndex(accFinder => accFinder.accountName === accObj);
        this.accountArray.splice(index, 1);
    }

    totalCash() {
        // can use reduce mthod, its slightly more difficult as it is 
        // a call back function we will get to that later
        let sum = 0;
        for (var i = 0; i < this.accountArray.length; i++) {
            sum = sum + this.accountArray[i].initialBalance;
        }
        return sum;
    }

    highestAccount() {

    }


};

const functions = {

    buildDomCards(node, text) {
        const div = document.createElement('div');
        div.setAttribute('class', 'clCard');//applying premade css to new divs
        div.setAttribute('id', text.accountName);
        div.appendChild(document.createTextNode(text.accountName));
        // div.appendChild(document.createTextNode(text.initialBalance));

        //creating a ptag for balance to easily update balances with deposits and withdraws
        let pTag = document.createElement('P');
        //using `ptag ${text.accountName}` to associate specifc ids while not creating conflict with other id tags
        pTag.setAttribute('id', `ptag ${text.accountName}`);
        pTag.appendChild(document.createTextNode(text.initialBalance));
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
