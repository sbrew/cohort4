import ooStuff from './account.js';


let acct1 = new ooStuff.Account();

createAccount.addEventListener('click', function () {
    if (accountName.value.length > 0 && initialDeposit.value.length > 0) {
        acct1 = new ooStuff.Account(accountName.value, Number(initialDeposit.value));
        accountName.value = "";
        initialDeposit.value = "";
        console.log(acct1);
        return acct1;
    }
});

balance.addEventListener('click', function () {
    console.log(acct1.balance());
    showBalance.textContent = "Your current balance is $" + acct1.balance();
    // return acct1;
});

deposit.addEventListener("click", function () {
    acct1.deposit(Number(update.value));
    console.log(acct1);
    // return acct1;
});

withdraw.addEventListener("click", function () {
    acct1.withdraw(Number(update.value));
    console.log(acct1);
    // return acct1;
});

