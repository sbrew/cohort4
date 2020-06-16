import React from 'react';
import { fireEvent, render, screen, act } from '@testing-library/react';
import LIFOApp from './LIFOApp';

test('test the basic LIFO/FIFO input user interface', () => {
    const mockPutInClickCallback = jest.fn();
    const mockTakeOutClickCallback = jest.fn();
    
    render(<LIFOApp
        putIn={mockPutInClickCallback}
        takeOut={mockTakeOutClickCallback}
         />);

    screen.getByText(/put in/i);
    
    let newItem = document.getElementById('iDNewItem');
    newItem.value=1;

    expect(newItem.value).toBe("1")
   
    
    expect(mockPutInClickCallback.mock.calls.length).toBe(0);
    click('Put In');
    expect(mockPutInClickCallback.mock.calls.length).toBe(1);

    expect(mockTakeOutClickCallback.mock.calls.length).toBe(0);
    click('Take Out');
    expect(mockTakeOutClickCallback.mock.calls.length).toBe(1);
    
});

function click(txt) {
    fireEvent.click(
        screen.getByText(txt)
    );
}