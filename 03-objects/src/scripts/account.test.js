import ooStuff from './account';

let acct1 = new ooStuff.Account("checking", 0);
const acct2 = new ooStuff.AccountController();

test('does the class work', () => {
    expect(acct1).toBeInstanceOf(ooStuff.Account);
});

test('does the constructor work', () => {
    expect(acct1.accountName).toBe("checking");
    expect(acct1.initialBalance).toBe(0);
});

test('does the deposit function work', () => {
    acct1.deposit(100);
    expect(acct1.balance()).toBe(100);
    acct1.deposit(500);
    expect(acct1.balance()).toBe(600);
});

test('does the withdraw function work', () => {
    acct1.withdraw(100);
    expect(acct1.balance()).toBe(500);
    acct1.withdraw(250);
    expect(acct1.balance()).toBe(250);
});

test('does it add to the accounts', () => {
    expect(acct2.addAccount(13)).toStrictEqual([13]);
    expect(acct2.addAccount(25)).toStrictEqual([13,25]);
});
let acct3= ooStuff.AccountController.addAccount(new ooStuff.Account("checking", 1000));

test('does it remove accounts from the array', () => {
    console.log(acct3);
    // expect(acct2.removeAccount(13)).toBe([25]);
});

const text = "Some text";

test('does the DOM function work?', () => {
    console.log("We are in the tests");
    let element = ooStuff.functions.buildDomCards(text);
    expect(element).toBeTruthy();
});


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