import ooStuff from './account';

test('does the class work', () => {
    let acct1 = new ooStuff.Account("checking", 100);
    expect(acct1).toBeInstanceOf(ooStuff.Account);
});

test('does the constructor work', () => {
    let acct1 = new ooStuff.Account("checking", 100);
    expect(acct1.accountName).toBe("checking");
    expect(acct1.balance).toBe(100);
});

test('does the deposit function work', () => {
    let acct1 = new ooStuff.Account("checking", 100);
    acct1.deposit(100);
    expect(acct1.getBalance()).toBe(200);
    acct1.deposit(500);
    expect(acct1.getBalance()).toBe(700);
});

test('does the withdraw function work', () => {
    let acct1 = new ooStuff.Account("checking", 700);
    acct1.withdraw(100);
    expect(acct1.getBalance()).toBe(600);
    acct1.withdraw(250);
    expect(acct1.getBalance()).toBe(350);
});

test('does it add to the accounts', () => {
    const controller = new ooStuff.AccountController();
    expect(controller.addAccount("checking", 100)).toEqual([{ accountName: 'checking', balance: 100 }]);
    expect(controller.addAccount("savings", 1000)).toEqual([{ accountName: 'checking', balance: 100 }, { accountName: 'savings', balance: 1000 }]);
});

test('does it remove accounts from the array', () => {
    const controller = new ooStuff.AccountController();
    controller.addAccount("savings", 1000);
    controller.addAccount("checking", 100);
    controller.removeAccount("checking");
    expect(controller.accountArray).toEqual([{ accountName: 'savings', balance: 1000 }]);
    controller.removeAccount("savings");
    expect(controller.accountArray).toEqual([]);
});

test('what is the balance of the account', () => {
    const controller1 = new ooStuff.AccountController();
    controller1.addAccount("checking", 100);
    expect(controller1.getBalance("checking")).toBe(100);
    controller1.addAccount("savings", 500);
    expect(controller1.getBalance("savings")).toBe(500);
});

test('does it deposit into the accounts', () => {
    const controller1 = new ooStuff.AccountController();
    controller1.addAccount("checking", 100);
    expect(controller1.getBalance("checking")).toBe(100);
    controller1.accountDeposit("checking", 300);
    expect(controller1.getBalance("checking")).toBe(400);
});

test('does it withdraw from the accounts', () => {
    const controller1 = new ooStuff.AccountController();
    controller1.addAccount("checking", 1000);
    expect(controller1.getBalance("checking")).toBe(1000);
    controller1.accountWithdraw("checking", 300);
    expect(controller1.getBalance("checking")).toBe(700);
    controller1.addAccount("savings", 2000);
    controller1.accountWithdraw("savings", 500);
    expect(controller1.getBalance("savings")).toBe(1500);
});

test('whats the total cash money', () => {
    const controller = new ooStuff.AccountController();
    controller.addAccount("checking", 100);
    controller.addAccount("savings", 1000);
    console.log(controller.accountArray);
    expect(controller.totalCash()).toStrictEqual(1100);
});

test('which account has the most', () => {
    const controller = new ooStuff.AccountController();
    controller.addAccount("checking", 100);
    controller.addAccount("savings", 1000);
    expect(controller.biggestAccount()).toEqual("savings,1000");
    controller.addAccount("credit", 6000);
    expect(controller.biggestAccount()).toEqual("credit,6000");
});

test('which account has the least', () => {
    const controller = new ooStuff.AccountController();
    controller.addAccount("checking", 100);
    controller.addAccount("savings", 1000);
    controller.addAccount("credit", 6000);
    expect(controller.smallestAccount()).toEqual("checking,100");
    controller.removeAccount("checking");
    controller.removeAccount("savings");
    expect(controller.smallestAccount()).toEqual("credit,6000");
});