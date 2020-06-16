import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import DataStructureApp from './Queue_StackApp';
import qSFunctions from './buisness/FIFO_LIFO';

test('test the basic queue/stack display interface', () => {
    const mockPutInClickCallback = jest.fn();
  
    //test data
    let queue = new qSFunctions.Queue()
    queue.putIn("A")

    render(<DataStructureApp
        
         />);

    screen.getByText(/queues & stacks/i); 
    
    click('Put In')
    click('Take Out')
    expect(queue.items.length).toBe(1)
    screen.debug()
});

function click(txt) {
    fireEvent.click(
        screen.getByText(txt)
    );
}