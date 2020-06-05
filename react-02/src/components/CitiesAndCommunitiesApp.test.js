import React from "react";
import { fireEvent, render, screen, act } from '@testing-library/react';

import CitiesUI from './CitiesAndCommunitiesApp';


test('test the basic Account user interface', async (done) => {

    const fakeCities = [
        { key: 1, latitude: 1, longitude: 2, name: "calgary", population: 1 }
    ];
    jest.spyOn(global, "fetch").mockImplementation(() =>
        Promise.resolve({
            json: () => Promise.resolve(fakeCities)
        })
    );

    await act(async () => {
        render(<CitiesUI
        />);
    });
    
    screen.getByText(/cities and communities/i);
    //testing that the random button renders a city card by checking before and after button amounts
    let renderedButtons=screen.getAllByRole('button')
    expect(renderedButtons.length).toBe(5)
    
    await act(async () => {
        await click('Random City Data');
    });

    renderedButtons=screen.getAllByRole('button')
    expect(renderedButtons.length).toBe(8)

    let cityName = document.getElementById('idCityName')
    let latitude = document.getElementById('idLatitude')
    let longitude = document.getElementById('idLongitude')
    let population = document.getElementById('idPopulation')
    cityName.value = "Cary"
    latitude.value = 5;
    longitude.value = 2;
    population.value = 3;


    await act(async () => {
        await click('Input City Data');
    });

    screen.getByText(/cary/i);

    done();
});

function click(txt) {
    fireEvent.click(
        screen.getByText(txt)
    );
}