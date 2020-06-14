import React, { Suspense } from 'react';
import { fireEvent, render, screen, act } from '@testing-library/react';
import LinkedListApp from './LinkedListApp';

test('test the basic linkedlistapp user interface', () => {


    render(<LinkedListApp />);

    screen.getByText(/build some linked/i);

    // let amount = document.getElementById('iDAmount');
    // amount.value=1;
    // let subject=document.getElementById('iDSubject');
    // subject.value=1

    // // click('Enter Data')
    // // screen.debug();
});

function click(txt) {
    fireEvent.click(
        screen.getByText(txt)
    );
}