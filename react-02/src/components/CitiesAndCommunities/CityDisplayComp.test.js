import React from "react";
import { fireEvent, render, screen, act } from '@testing-library/react';

import CityDisplayComp from './CityDisplayComp';
import funcs from './CCController';

test('test the basic City Card Display', () => {
    // set up the callbacks to test later
    const mockpopIncreaseClickCallBack = jest.fn();
    const mockpopDecreaseClickCallBack = jest.fn();
    const mockdelFuncCallBack = jest.fn();
    const mockupdateServersCallBack = jest.fn();

    //set up test data
    const controller = new funcs.Community();
    controller.createCity("calgary", 2, 3, 4, 1);

    let cards = Object(controller.cityList).map(city => {
        const hem = controller.whichSphere(city.name)
        return <CityDisplayComp
            key={city.key}
            city={city}
            hemisphere={hem}
            popIncrease={mockpopIncreaseClickCallBack}
            popDecrease={mockpopDecreaseClickCallBack}
            delFunc={mockdelFuncCallBack}
            updateServers={mockupdateServersCallBack}
        />
    });
    render(
        cards
    );

    screen.getByText(/calgary/i);

    let movingIn = document.getElementById('iDMovingIn')
    
    expect(mockpopIncreaseClickCallBack.mock.calls.length).toBe(0);
    expect(mockupdateServersCallBack.mock.calls.length).toBe(0);
    fireEvent.click(
        movingIn
    );
    expect(mockpopIncreaseClickCallBack.mock.calls.length).toBe(1);
    expect(mockupdateServersCallBack.mock.calls.length).toBe(1);

    let movingOut = document.getElementById('iDMovingOut')
    
    expect(mockpopDecreaseClickCallBack.mock.calls.length).toBe(0);
    fireEvent.click(
        movingOut
    );
    expect(mockpopDecreaseClickCallBack.mock.calls.length).toBe(1);
    expect(mockupdateServersCallBack.mock.calls.length).toBe(2);

    let deleteCity = document.getElementById('iDRemoveCity')
    
    expect(mockdelFuncCallBack.mock.calls.length).toBe(0);
    fireEvent.click(
        deleteCity
    );
    expect(mockdelFuncCallBack.mock.calls.length).toBe(1);
    expect(mockupdateServersCallBack.mock.calls.length).toBe(2);
});

function click(txt) {
    fireEvent.click(
        screen.getByText(txt)
    );
}