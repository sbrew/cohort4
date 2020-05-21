import React from "react";
import { fireEvent, render, screen, act } from '@testing-library/react';

import AccountsUI from './Accounts';
import accountStuff from './AccountController'

test('test the basic Account user interface', () => {

    // set up the callbacks to test later
    const mockOnAddAccountCallback = jest.fn();
    // set up test data
    // const accounts = {
    //     1: { accountName: 'Checking', initialDeposit: 1000, key: 1 },
    //     2: { accountName: 'Savings', initialDeposit: 5000, key: 2 },
    // };

    // create an Account controller and a new account
    const acctCtrl = new accountStuff.AccountController();
    const account = acctCtrl.getNewAccount();


    // default a few values
    account.accountName = 'Checking';
    account.initialDeposit = 1000;

    render(<AccountsUI
        account={account}
        addAccount={mockOnAddAccountCallback}
    />);

    // click('Add Account');

    // screen.getByText(/accountsui/i);

    // updateValue('Checking', 'newChecking');

    // Did the names render correctly
    expect(getValue('accountName')).toBe('Checking');
    expect(getValue('initialDeposit')).toBe(1000);
    screen.debug()
});

function click(txt) {
    fireEvent.click(
        screen.getByText(txt)
    );
}

function getValue(accountName) {
    return document.querySelector(`[accountName=${accountName}]`).value;
}

function updateValue(accountName, value) {
    document.querySelector(`[accountName=${accountName}]`).value = value;
}