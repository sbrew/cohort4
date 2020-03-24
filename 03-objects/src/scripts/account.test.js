import ooStuff from './account';

test('does the class work', () => {
    let acct1 = new ooStuff.Account("checking", 0);
    expect(acct1).toBeInstanceOf(ooStuff.Account);
});

test('does the constructor work', () => {
    let acct1 = new ooStuff.Account("checking", 0);
    expect(acct1.accountName).toBe("checking");
    expect(acct1.initialBalance).toBe(0);
});

test('does the deposit function work', () => {
    const acct1 = new ooStuff.Account("checking", 0);
    expect(acct1.deposit(100)).toBe(100);
    expect(acct1.deposit(500)).toBe(500);
});

test('does the withdraw function work', () => {
    const acct1 = new ooStuff.Account("checking", 1000);
    expect(acct1.withdraw(100)).toBe(900);
    expect(acct1.withdraw(500)).toBe(500);
});

test('does the balance function work', () => {
    const acct1 = new ooStuff.Account("checking", 1000);
    expect(acct1.balance()).toBe(1000);
});

