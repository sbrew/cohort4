import ooStuff from './account';

let acct1 = new ooStuff.Account("checking", 100);
const controller = new ooStuff.AccountController();

test('does the class work', () => {
    expect(acct1).toBeInstanceOf(ooStuff.Account);
});

test('does the constructor work', () => {
    expect(acct1.accountName).toBe("checking");
    expect(acct1.initialBalance).toBe(100);
});

test('does the deposit function work', () => {
    acct1.deposit(100);
    expect(acct1.balance()).toBe(200);
    acct1.deposit(500);
    expect(acct1.balance()).toBe(700);
});

test('does the withdraw function work', () => {
    acct1.withdraw(100);
    expect(acct1.balance()).toBe(600);
    acct1.withdraw(250);
    expect(acct1.balance()).toBe(350);
});

test('does it add to the accounts', () => {
    expect(controller.addAccount(13)).toStrictEqual([13]);
    expect(controller.addAccount(25)).toStrictEqual([13, 25]);
});

let acct3 = (new ooStuff.Account("savings", 1000));
let acctMng = new ooStuff.AccountController();

test('does it remove accounts from the array', () => {
    acctMng.addAccount(acct1);
    acctMng.addAccount(acct3);
    acctMng.removeAccount("checking");
    expect(acctMng.accountArray).toEqual([{ accountName: 'savings', initialBalance: 1000 }]);
    acctMng.removeAccount("savings");
    expect(acctMng.accountArray).toEqual([]);
});

test('whats the total cash money', () => {
    acctMng.addAccount(acct1);
    acctMng.addAccount(acct3);
    expect(acctMng.totalCash()).toStrictEqual(1350);
});

let acct4 = (new ooStuff.Account("credit", 6000));

test('which account has the most', () => {
    expect(acctMng.biggestAccount()).toEqual("savings,1000");
    acctMng.addAccount(acct4);
    expect(acctMng.biggestAccount()).toEqual("credit,6000");
});

test('which account has the least', () => {
    expect(acctMng.smallestAccount()).toEqual("checking,350");
    acctMng.removeAccount("checking");
    acctMng.removeAccount("savings");
    expect(acctMng.smallestAccount()).toEqual("credit,6000");
});


















// const text = "Some text";

// test('does the DOM function work?', () => {
//     console.log("We are in the tests");
//     let element = ooStuff.functions.buildDomCards(text);
//     expect(element).toBeTruthy();
// });


// test('does it Add to accounts?', () => {
//     let group = document.createElement('div');
//     let element = ooStuff.functions.buildDomCards('first insert');
//     group.appendChild(element);
//     expect(group.children.length).toBe(1);

//     const txt = 'Account undefined'
//     ooStuff.functions.addToAccounts(element, txt);
//     expect(group.children.length).toBe(2);
//     expect(group.children[0].textContent.substr(0, 17)).toBe(txt);
//     expect(group.children[1].textContent.substr(0, 17)).toBe("Account undefined");

// });