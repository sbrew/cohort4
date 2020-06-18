import React from 'react';
import {  render, screen } from '@testing-library/react';
import Cards from './Cards';
import qSFunctions from './buisness/FIFO_LIFO';
import '@testing-library/jest-dom/extend-expect'
// import { ThemeContext } from '../../contexts/AppContext';

test('test the basic Card display interface', () => {
   
  
    //test data
    let queue = new qSFunctions.Queue()
    queue.putIn("A")

    render(<Cards
        key={queue.items[0].key}
            thing={queue.items[0].name}
         />);

    screen.getByText(/item/i);    
});