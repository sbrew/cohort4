import React from "react";
import { fireEvent, render, screen } from '@testing-library/react';

import AccountsUI from './AccountsApp';

test('test the basic Account user interface', () => {

    render(<AccountsUI    />);

    screen.getByText(/bank of evolveu/i);

    click('Add Account');

    screen.getByText(/account name can not be blank/i);

    let name = document.getElementById('idAccountName')
    let initialDeposit = document.getElementById('idInitialDeposit')
    name.value = "checking"
    initialDeposit.value = 1000;
    click('Add Account');
    screen.getByText(/account name checking/i);

    name.value = "savings"
    initialDeposit.value = 5000;
    click('Add Account');

    screen.getByText(/account name savings/i);
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