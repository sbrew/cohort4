import React from "react";
import { fireEvent, render, screen, act } from '@testing-library/react';

import AccountDisplayComp from './AccountDisplayComp';
import funcs from './buisness/AccountController';


test('test the basic Account display', () => {
    // set up the callbacks to test later
    const mockdepositClickCallback = jest.fn();
    const mockwithdrawClickCallback = jest.fn();
    const mockcloseClickCallback = jest.fn();
    const mockHandleBalanceChange = jest.fn();
    const mockBalanceChange = jest.fn();

    // set up test data
    // let accounts = {
    //     '1': { accountName: 'checking', balance: 100, key: 1 },
    //     '2': { accountName: 'savings', balance: 1000, key: 2 }
    // }

    const controller = new funcs.AccountController();
    let accounts = controller.accounts = {
        '1': { accountName: 'checking', balance: 100, key: 1 },
        '2': { accountName: 'savings', balance: 1000, key: 2 }
    }

    let cards = Object.keys(accounts).map(key => {
        const account = accounts[key];
        return <AccountDisplayComp
            key={key}
            account={account}
            depositClick={mockdepositClickCallback}
            withdrawClick={mockwithdrawClickCallback}
            closeClick={mockcloseClickCallback}
            onBalanceChange={mockHandleBalanceChange}
            balanceChange={mockBalanceChange}
        />
    });

    render(
        cards
    );

    screen.getByText(/account name savings/i);

    let depositButton = screen.getAllByRole('button')

    fireEvent.click(
        depositButton[0]
    );

    expect(mockdepositClickCallback.mock.calls.length).toBe(1);

    expect(mockwithdrawClickCallback.mock.calls.length).toBe(0);

    fireEvent.click(
        depositButton[1]
    );
    expect(mockwithdrawClickCallback.mock.calls.length).toBe(1);
    expect(mockcloseClickCallback.mock.calls.length).toBe(0);
    fireEvent.click(
        depositButton[2]
    );

    expect(mockcloseClickCallback.mock.calls.length).toBe(1);
    fireEvent.click(
        depositButton[5]
    );
    expect(mockcloseClickCallback.mock.calls.length).toBe(2);

    let input = document.getElementById("savings")
    fireEvent.change(input, { target: { value: 50 } })
    fireEvent.click(
        depositButton[4]
    );
});

function click(txt) {
    fireEvent.click(
        screen.getByText(txt)
    );
}