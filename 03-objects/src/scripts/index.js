import ooStuff from './account.js';

let AccountController = new ooStuff.AccountController();
let i = 0;

// window.addEventListener('click', function (event) {
//     console.log(event.target);
// });

createAccount.addEventListener('click', function () {
    if (accountName.value.length > 0 && initialDeposit.value.length > 0) {
        AccountController.addAccount(new ooStuff.Account(accountName.value, Number(initialDeposit.value)));
        ooStuff.functions.buildDomCards(document.getElementById("showBalance"), (AccountController.accountArray[i]));
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
        updateBankAccounts();
        clearFields();
    }
});

withdraw.addEventListener("click", function () {
    if (lengthCheck() > 0) {
        update.value = Number(update.value).toFixed(2);
        let index = AccountController.accountArray.findIndex(accFinder => accFinder.accountName === dropdown.value);
        AccountController.accountArray[index].withdraw(Number(update.value));
        updateBankAccounts();
        clearFields();
    }
});
addEventListener("click", function () {
    if (event.target.textContent === 'Close Account') {
        AccountController.removeAccount(event.target.parentElement.id);
        ooStuff.functions.deleteDiv(event.target.parentElement);
        // deleting items from drop down
        let dd = event.target.parentElement.id;
        // found the id of div card to relate with the dropdown
        let counter = 0;
        for (let q = 0; q < dropdown.length; q++) {
            // looping through the dropdown until the id matches the dropdown
            if (dd === dropdown[q].id) {
                counter = q;
            }
        };
        dropdown.removeChild(dropdown[counter]);
        return i--;
    }
});

sumArr.addEventListener('click', function () {
    messageArea.innerText = `Your current balance is $${AccountController.totalCash()}`;
});


function clearFields() {
    accountName.value = "";
    initialDeposit.value = "";
    update.value = "";
    dropdown.value= "Select";
};

function lengthCheck() {
    return update.value.length;
};

function updateBankAccounts() {
    let index = AccountController.accountArray.findIndex(accFinder => accFinder.accountName === dropdown.value);
    let updatedDisplayBalance = AccountController.accountArray[index].accountName;
    let counter = 0;
    for (let q = 0; q < dropdown.length; q++) {
        // looping through the dropdown until the accountName id matches the dropdown id
        if (updatedDisplayBalance === dropdown[q].id) {
            counter = q;
        }
    };
    if (updatedDisplayBalance === dropdown[counter].value) {
        document.getElementById(`ptag ${updatedDisplayBalance}`).textContent = AccountController.accountArray[index].initialBalance
    }
};

