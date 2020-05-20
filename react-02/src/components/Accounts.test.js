import React from "react";
import { fireEvent, render, screen, act } from '@testing-library/react';

import AccountsUI from './AccountsUI';

test('test the basic Account user interface', () => {

    // set up the callbacks to test later
    const mockOnAddAccountCallback = jest.fn();
    // set up test data
    const accounts = {
        1:{name: 'Checking', initialDeposit:1000, key:1},
        2:{name: 'Savings', initialDeposit:5000, key:2},
    };

    render(<AccountsUI
        />)

    
});
        function click (txt) {
            fireEvent.click(
                screen.getByText(txt)
            );
        }