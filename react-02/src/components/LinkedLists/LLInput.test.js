import React from 'react';
import { fireEvent, render, screen, act } from '@testing-library/react';
import LinkedListInput from './LLInput';

test('test the basic linkedlist input user interface', () => {
    const mockEnterDataClickCallback = jest.fn();
    
    render(<LinkedListInput
        createNewNode={mockEnterDataClickCallback} />);

    screen.getByText(/Create New Nodes here/i);
    
    let amount = document.getElementById('iDAmount');
    amount.value=1;
    let subject=document.getElementById('iDSubject');
    subject.value=1
    screen.debug()
    
    expect(mockEnterDataClickCallback.mock.calls.length).toBe(0);
    click('Enter Data');
    expect(mockEnterDataClickCallback.mock.calls.length).toBe(1);
});

function click(txt) {
    fireEvent.click(
        screen.getByText(txt)
    );
}