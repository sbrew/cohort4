import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import DataStructureApp from './Queue_StackApp';
import qSFunctions from './buisness/FIFO_LIFO';

test('test the basic queue/stack display interface', () => {
    const mockPutInClickCallback = jest.fn();
  
    render(<DataStructureApp />);

    screen.getByText(/queues & stacks/i); 
    let item = screen.getByPlaceholderText("Enter Item")
    fireEvent.change(item, { target: { value: 'test' } })
    click('Put In')
    screen.getByText(/New Item Added: test/i);
    screen.getByText(/queue aka first/i);

    let switchButton = document.getElementById('iDIsStack')
    fireEvent.click(switchButton);
    screen.getByText(/stack aka Last/i);

    fireEvent.change(item, { target: { value: 'secondary' } })
    click('Put In')
    screen.getByText(/new item added: secondary/i);

    click('Take Out')
    screen.getByText(/recently deleted item: secondary/i);
    fireEvent.click(switchButton);
    click('Take Out')
    screen.getByText(/recently deleted item: test/i);
    // screen.debug()
});

function click(txt) {
    fireEvent.click(
        screen.getByText(txt)
    );
}