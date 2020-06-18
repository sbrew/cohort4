import React, { Suspense } from 'react';
import { fireEvent, render, screen, act } from '@testing-library/react';
import LinkedListApp from './LinkedListApp';

test('test the basic linkedlistapp user interface', () => {


    render(<LinkedListApp />);

    screen.getByText(/build some linked/i);

    let subject = screen.getByPlaceholderText("Enter Subject")
    let amount = screen.getByPlaceholderText("Enter Amount")

    fireEvent.change(subject, { target: { value: 'VideoGames' } })
    fireEvent.change(amount, { target: { value: '4' } })

    click('Enter Data')

    screen.getByText(/total: 4/i);

    fireEvent.change(subject, { target: { value: 'bikes' } })
    fireEvent.change(amount, { target: { value: '7000' } })

    click('Enter Data')

    screen.getByText(/current node: subject bikes/i);

    click('Previous Node')
    click('Previous Node')

    screen.getByText(/linked list head/i);
    screen.debug()
    click('Next Node')

    screen.getByText(/current node: subject bikes/i);

    click('Delete Node')

    screen.getByText(/current node: subject video/i);

    click('Delete Node')

    screen.getByText(/current node:/i);
});

function click(txt) {
    fireEvent.click(
        screen.getByText(txt)
    );
}