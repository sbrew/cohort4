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
};

const functions = {

    buildDomCards(text) {
        const div = document.createElement('div');
        div.setAttribute('class', 'clCard'); //applying premade css to new divs
        div.appendChild(document.createTextNode(text.accountName));
        div.appendChild(document.createTextNode(text.initialBalance));

        const delBut = document.createElement('button');
        delBut.appendChild(document.createTextNode("Close Account"));
        div.appendChild(delBut);

        return div;
    },

    addToAccounts(node, text) {
        const div = functions.buildDomCards(text);
        node.parentElement.insertBefore(div, node);
    },

    dropDownOptions(text) {
        const options = document.createElement('OPTION');
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
    }
};




// totalArray: (arr) => {
//     // can use reduce mthod, its slightly more difficult as it is 
//     // a call back function we will get to that later
//     let sum = 0;
//     for (var i = 0; i < arr.length; i++) {
//       sum = sum + arr[i];
//     }
//     return sum;
//   },
// showArray: (arr) => {
//     let arrDisplay = arr.join();
//     return arrDisplay;
//   },



export default { Account, AccountController, functions };
