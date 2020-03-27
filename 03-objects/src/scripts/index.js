import ooStuff from './account.js';

let AccountController = new ooStuff.AccountController();
let i = 0;

window.addEventListener('click', function (event) {
    console.log(event.target);
});

createAccount.addEventListener('click', function () {
    if (accountName.value.length > 0 && initialDeposit.value.length > 0) {
        AccountController.addAccount(new ooStuff.Account(accountName.value, Number(initialDeposit.value)));
        ooStuff.functions.addToAccounts(document.getElementById("showBalance"), (AccountController.accountArray[i]));
        ooStuff.functions.attachToDD(document.getElementById("dropdown"), (AccountController.accountArray[i]));
        console.log(AccountController);
        i++;
        clearFields();
    }
});

// balance.addEventListener('click', function () {
//     console.log(acct1.displayBalance());
//     showBalance.textContent = `Your current balance is $${acct1.displayBalance()}`;
// });

deposit.addEventListener("click", function () {
    if (lengthCheck() > 0) {
        update.value = Number(update.value).toFixed(2);
        let index = AccountController.accountArray.findIndex(accFinder => accFinder.accountName === dropdown.value);
        AccountController.accountArray[index].deposit(Number(update.value));
        console.log(AccountController);
        clearFields();
    }
});

withdraw.addEventListener("click", function () {
    if (lengthCheck() > 0) {
        update.value = Number(update.value).toFixed(2);
        let index = AccountController.accountArray.findIndex(accFinder => accFinder.accountName === dropdown.value);
        AccountController.accountArray[index].withdraw(Number(update.value));
        console.log(AccountController);
        clearFields();
    }
});

addEventListener("click", function () {
           if (event.target.textContent === 'Close Account') {
            AccountController.removeAccount(event.target);
            ooStuff.functions.deleteDiv(event.target.parentElement);
            return i--;
        }
    
});

function clearFields() {
    accountName.value = "";
    initialDeposit.value = "";
    update.value = "";
};

function lengthCheck() {
    return update.value.length;
};

function updateBankAccounts() {

};