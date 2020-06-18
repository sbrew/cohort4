import React from "react";
import { fireEvent, render, screen, act } from '@testing-library/react';

import SVGicons from './SVGicons';

test('are we clicking the right icons', () => {
    const mockIconClickCallBack = jest.fn();

    render(<SVGicons 
        handleClick={ mockIconClickCallBack} 
    />)

    screen.debug()

    let chosenIcon = screen.getAllByRole('img')

    expect(mockIconClickCallBack.mock.calls.length).toBe(0)
    fireEvent.click(chosenIcon[0])
    expect(mockIconClickCallBack.mock.calls.length).toBe(1)

    expect(mockIconClickCallBack.mock.calls[0][0]).toBe(0)
    fireEvent.click(chosenIcon[1])
    expect(mockIconClickCallBack.mock.calls.length).toBe(2)
    expect(mockIconClickCallBack.mock.calls[1][0]).toBe(1)

    expect(mockIconClickCallBack.mock.calls[0][0]).toBe(0)
    fireEvent.click(chosenIcon[2])
    fireEvent.click(chosenIcon[3])
    fireEvent.click(chosenIcon[4])
    fireEvent.click(chosenIcon[5])
    fireEvent.click(chosenIcon[6])
    // expect(mockIconClickCallBack.mock.calls.length).toBe(2)
    expect(mockIconClickCallBack.mock.calls[6][0]).toBe(6)

    // expect(mockIconClickCallBack.mock.calls[0][0]).toBe(0)
    // // fireEvent.click(chosenIcon[4])
    // expect(mockIconClickCallBack.mock.calls[2][0]).toBe(2)
   
    

});


function click(txt) {
    fireEvent.click(
        screen.getByText(txt)
    );
}