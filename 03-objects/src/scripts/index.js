import ooStuff from './account.js';
import functions from './DOM.js';

let AccountController = new ooStuff.AccountController();
let i = 0;

addEventListener('click' ,function () {
    console.log(event.targt);
});

createAccount.addEventListener('click', function () {
    if (accountName.value.length > 0 && initialDeposit.value.length > 0) {
        AccountController.addAccount(accountName.value, Number(initialDeposit.value));
        functions.buildDomCards(showBalanceID, (AccountController.accountArray[i]));
        functions.attachToDD(dropdownID, (AccountController.accountArray[i]));
        i++;
        clearFields();
    }
});

deposit.addEventListener("click", function () {
    if (lengthCheck() > 0) {
        AccountController.accountDeposit(dropdownID.value,Number(update.value).toFixed(2));
        updateBankAccounts();
        clearFields();
    }
});

withdraw.addEventListener("click", function () {
    if (lengthCheck() > 0) {
        AccountController.accountWithdraw(dropdownID.value,Number(update.value).toFixed(2));
        updateBankAccounts();
        clearFields();
    }
});

addEventListener("click", function () {
    if (event.target.textContent === 'Close Account') {
        AccountController.removeAccount(event.target.parentElement.id);
        functions.deleteDiv(event.target.parentElement);
        // deleting items from drop down
        let dd = event.target.parentElement.id;
        // found the id of div card to relate with the dropdown
        let counter = 0;
        for (let q = 0; q < dropdownID.length; q++) {
            // looping through the dropdown until the id matches the dropdown
            if (dd === dropdownID[q].id) {
                counter = q;
            }
        };
        dropdownID.removeChild(dropdownID[counter]);
        return i--;
    }
});

sumArr.addEventListener('click', function () {
    messageArea.innerText = `Your current balance is $${AccountController.totalCash()}`;
});

lowest.addEventListener('click', function () {
    messageArea.innerText = `Your lowest balance account is ${AccountController.smallestAccount()}`;
});

biggest.addEventListener('click', function () {
    messageArea.innerText = `Your highest balance account is ${AccountController.biggestAccount()}`;
});

function clearFields() {
    accountName.value = "";
    initialDeposit.value = "";
    update.value = "";
    dropdownID.value= "Select";
};

function lengthCheck() {
    return update.value.length;
};

function updateBankAccounts() {
    let index = AccountController.accountArray.findIndex(accFinder => accFinder.accountName === dropdownID.value);
    let updatedDisplayBalance = AccountController.accountArray[index].accountName;
    let counter = 0;
    for (let q = 0; q < dropdownID.length; q++) {
        // looping through the dropdown until the accountName id matches the dropdown id
        if (updatedDisplayBalance === dropdownID[q].id) {
            counter = q;
        }
    };
    if (updatedDisplayBalance === dropdownID[counter].value) {
        document.getElementById(`ptag ${updatedDisplayBalance}`).textContent = AccountController.accountArray[index].balance
    }
};
