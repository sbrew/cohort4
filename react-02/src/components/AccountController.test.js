import ooStuff from './AccountController';

test('does the class work', () => {
    let acct1 = new ooStuff.Account("checking", 100);
    expect(acct1).toBeInstanceOf(ooStuff.Account);
});

test('does the constructor work', () => {
    let acct1 = new ooStuff.Account();
    acct1.accountName = 'Checking';
    acct1.balance = 1000;
    expect(acct1.accountName).toBe("Checking");
    expect(acct1.balance).toBe(1000);
});

test('does the deposit function work', () => {
    let acct1 = new ooStuff.Account();
    acct1.accountName = 'Checking';
    acct1.balance = 1000;
    acct1.deposit(100);
    expect(acct1.getBalance()).toBe(1100);
    acct1.deposit(500);
    expect(acct1.getBalance()).toBe(1600);
});

test('does the withdraw function work', () => {
    let acct1 = new ooStuff.Account();
    acct1.accountName = 'Checking';
    acct1.balance = 1000;
    acct1.withdraw(100);
    expect(acct1.getBalance()).toBe(900);
    acct1.withdraw(250);
    expect(acct1.getBalance()).toBe(650);
});

test('does it add to the accounts', () => {
    const controller = new ooStuff.AccountController();
    let value1 =controller.addAccount({ accountName: "", balance: "" });
    expect(value1).toBe(('Account name can not be blank'));
    controller.addAccount({ accountName: "checking", balance:100 });
    expect(controller.accounts).toStrictEqual(({ '1': { accountName: 'checking', balance: 100, key: 1 } }));
    expect(controller.addAccount({ accountName: "checking", balance:100 })).toBe("Can not create a duplicate account");
    expect( controller.addAccount({ accountName: "savings", balance: 0 })).toBe("Can not create an empty account");
});

test('does it remove accounts from the dictionary', () => {
    const controller = new ooStuff.AccountController();
    controller.addAccount({ accountName: "checking", balance: 100 });
    controller.addAccount({ accountName: "savings", balance: 5000 });
    controller.removeAccount(1);
    expect(controller.length()).toBe(1);
});

test('does it deposit into the accounts', () => {
    const controller = new ooStuff.AccountController();
    controller.addAccount({ accountName: "checking", balance: 100 });
    controller.addAccount({ accountName: "savings", balance: 5000 });
    expect(controller.accountDeposit(1, 1000)).toBe(1100);
    expect(controller.accountDeposit(2, 1000)).toBe(6000);
});

test('does it return the account', () => {
    const controller = new ooStuff.AccountController();
    controller.addAccount({ accountName: "checking", balance: 100 });
    expect(controller.getAccount(1)).toStrictEqual( {"accountName": "checking", "balance": 100, "key": 1});
});

test('does it return the account name', () => {
    const controller = new ooStuff.AccountController();
    controller.addAccount({ accountName: "checking", balance: 100 });
    expect(controller.getAccountName("checking")).toBe( "checking");
});

test('does it withdraw from the accounts', () => {
    const controller = new ooStuff.AccountController();
    controller.addAccount({ accountName: "checking", balance: 1000 });
    controller.addAccount({ accountName: "savings", balance: 5000 });
    expect(controller.accountWithdraw(1, 1000)).toBe(0);
    expect(controller.accountWithdraw(2, 1000)).toBe(4000);
});

test('whats the total cash money', () => {
    const controller = new ooStuff.AccountController();
    controller.addAccount({ accountName: "checking", balance: 1000 });
    controller.addAccount({ accountName: "savings", balance: 5000 });
    expect(controller.totalCash()).toBe(6000);
    controller.addAccount({ accountName: "credit", balance: 50000 });
    expect(controller.totalCash()).toBe(56000);
});

test('which account has the most', () => {
    const controller = new ooStuff.AccountController();
    controller.addAccount({ accountName: "checking", balance: 1000 });
    controller.addAccount({ accountName: "savings", balance: 5000 });
    expect(controller.biggestAccount()).toEqual(5000);
    controller.addAccount({ accountName: "credit", balance: 50000 });
    expect(controller.biggestAccount()).toEqual(50000);
});

test('which account has the least', () => {
    const controller = new ooStuff.AccountController();
    expect(controller.smallestAccount()).toEqual(0); 
    controller.addAccount({ accountName: "checking", balance: 1000 });
    controller.addAccount({ accountName: "credit", balance: 50000 });
    expect(controller.smallestAccount()).toEqual(1000); 
    controller.addAccount({ accountName: "savings", balance: 5000 });
    controller.removeAccount(1);
    expect(controller.smallestAccount()).toEqual(5000); 
});