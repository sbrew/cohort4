import React from 'react';
import {  render, screen } from '@testing-library/react';
import ListDisplay from './QSDisplay';
import qSFunctions from './buisness/FIFO_LIFO';

test('test the basic queue/stack display interface', () => {
   
  
    //test data
    let queue = new qSFunctions.Queue()
    queue.putIn("A")

    render(<ListDisplay
        itemList={queue.items}
         />);

    screen.getByText(/first/i);    
});