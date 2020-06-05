global.fetch = require('node-fetch');

import cityStuff from './CCController';
import fetching from '../buisness/functions'

test('does the class work', () => {
    let city = new cityStuff.City("Calgary", 51.0447, 114.0719, 1635000, 0);
    expect(city).toBeInstanceOf(cityStuff.City);
});

test('does the constructor work', () => {
    let city = new cityStuff.City
    city.name="Calgary"
    expect(city.name).toBe("Calgary");
    city.latitude=51.0447
    expect(city.latitude).toBe(51.0447);
    city.longitude=114.0719
    expect(city.longitude).toBe(114.0719);
    city.population=1635000
    expect(city.population).toBe(1635000);
});

test('does the show func work', () => {
    let city = new cityStuff.City();
    city.name="Calgary"
    city.latitude=51.0447
    city.longitude=114.0719
    city.population=1635000
    expect(city.show()).toBe(`Calgary is located at 51.0447 latitude and 114.0719 longitude, with a population of 1635000`);
});

test('are people moving in', () => {
    let city = new cityStuff.City();
    city.name="Calgary"
    city.latitude=51.0447
    city.longitude=114.0719
    city.population=1635000
    city.movedIn(300000);
    expect(city.population).toBe(1935000);
});

test('are people moving out', () => {
    let city = new cityStuff.City({name:"Calgary", latitude:51.0447, longitude:114.0719, population:1635000});
    city.movedOut(25000);
    expect(city.population).toBe(1610000);
});

test('how big is that place', () => {
    let city = new cityStuff.City({name:"Calgary", latitude:51.0447, longitude:114.0719, population:1635000});
    expect(city.howBig()).toBe("City");
    let city2 = new cityStuff.City({name:"Phoenix", latitude:33.4484, longitude:112.0740, population:25288});
    expect(city2.howBig()).toBe("Large town");
    let city3 = new cityStuff.City({name:"Seattle", latitude:47.6062, longitude:122.3321, population:15354});
    expect(city3.howBig()).toBe("Town");
    let city4 = new cityStuff.City({name:"Beiseker", latitude:51.3843, longitude:113.5363, population:819});
    expect(city4.howBig()).toBe("Village");
    let city5 = new cityStuff.City({name:"Tilt Cove",latitude: 49.8871, longitude:55.6316, population:5});
    expect(city5.howBig()).toBe("Hamlet");
    let city6 = new cityStuff.City({name:"Pryp'yat'",latitude:51.4045, longitude:30.0542, population:0});
    expect(city6.howBig()).toBe("Ghost Town");
});


test('does it add to the community controller', async () => {
    const url = 'http://127.0.0.1:5000/';

    let data = await fetching.postData(url + 'clear');
    const controller = new cityStuff.Community();
    // controller.createCity("", "", "", "");
    let city1=controller.createCity({name:"Calgary", latitude:51.0447, longitude:114.0719, population:1635000});
    console.log(city1);
    // expect(controller.createCity({name:"Calgary", latitude:51.0447, longitude:114.0719, population:1635000})).toBe(('City name can not be blank'));
    // controller.createCity("Calgary", 51.0447, 114.0719, 1635000);
    // data = await fetching.postData(url + 'read', { key: 1 });
    // expect(data.status).toEqual(200);
    // expect(data.length).toBe(1);
    // expect(data[0].name).toBe("Calgary");
    // controller.createCity("Pryp'yat'", 51.4045, 30.0542, 0);
    // data = await fetching.postData(url + 'read', { key: 2 });
    // expect(data.status).toEqual(200);
    // expect(data.length).toBe(1);
    // expect(data[0].name).toBe("Pryp'yat'");
    // data = await fetching.postData(url + 'all');
    // expect(data.status).toEqual(200);
    // expect(data.length).toBe(2);
    // // testing for 130E: Cities added to both server and object
    // // updating population on the server and object
    // controller.increasePopulation("Calgary", 1000);
    // expect(controller.cityList[0].currentPopulation()).toBe(1636000);
    // controller.updatePopulation("Calgary", 1);
    // data = await fetching.postData(url + 'read', { key: 1 });
    // expect(data.status).toEqual(200);
    // expect(data.length).toBe(1);
    // expect(data[0].population).toBe(1636000);
    // controller.createCity("Sydney", -33.8688, 151.2093, 5100000);
    // controller.increasePopulation("Sydney", 1000);
    // controller.updatePopulation("Sydney", 3);
    // expect(controller.cityList[2].currentPopulation()).toBe(5101000);
    // data = await fetching.postData(url + 'all');
    // expect(data[2].population).toBe(5101000);
    // controller.increasePopulation("Pryp'yat'", 1000);
    // controller.updatePopulation("Pryp'yat'", 2);
    // data = await fetching.postData(url + 'all');
    // expect(controller.cityList[1].currentPopulation()).toBe(1000);
    // expect(data[1].population).toBe(1000);
});

// test('are we reloading the data', async () => {
//     const controller = new cityStuff.Community();
//     expect(controller.cityList.length).toBe(0);
//     await controller.updateCities();
//     expect(controller.cityList.length).toBe(3);
// });

// test('does it check the hemisphere', async () => {
//     const url = 'http://127.0.0.1:5000/';
//     let data = await fetching.postData(url + 'clear');
//     const controller = new cityStuff.Community();
//     controller.createCity("Calgary", 51.0447, 114.0719, 1635000);
//     expect(controller.whichSphere("Calgary")).toBe(`This location is in the Northern Hemisphere`);
//     controller.createCity("Sydney", -33.8688, 151.2093, 5100000);
//     expect(controller.whichSphere("Sydney")).toBe(`This location is in the Southern Hemisphere`);
// });

// test('which is the most northern city', async () => {
//     const url = 'http://127.0.0.1:5000/';
//     let data = await fetching.postData(url + 'clear');
//     const controller = new cityStuff.Community();
//     controller.createCity("Cusco", -13.5320, 71.9675, 428450);
//     controller.createCity("Sydney", -33.8688, 151.2093, 5100000);
//     expect(controller.getMostNorthern()).toBe("Cusco at -13.532° latitude");
//     controller.createCity("Calgary", 51.0447, 114.0719, 1635000);
//     expect(controller.getMostNorthern()).toBe("Calgary at 51.0447° latitude");
// });

// test('which is the most southern city', async () => {
//     const url = 'http://127.0.0.1:5000/';
//     let data = await fetching.postData(url + 'clear');
//     const controller = new cityStuff.Community();
//     controller.createCity("Pryp'yat'", 51.4045, 30.0542, 0);
//     controller.createCity("Calgary", 51.0447, 114.0719, 1635000);
//     expect(controller.getMostSouthern()).toBe("Calgary at 51.0447° latitude");
//     controller.createCity("Cusco", -13.5320, 71.9675, 428450);
//     expect(controller.getMostSouthern()).toBe("Cusco at -13.532° latitude");
// });

// test('what is the gloabal population', async () => {
//     const url = 'http://127.0.0.1:5000/';
//     let data = await fetching.postData(url + 'clear');
//     const controller = new cityStuff.Community();
//     controller.createCity("Pryp'yat'", 51.4045, 30.0542, 0);
//     controller.createCity("Calgary", 51.0447, 114.0719, 1635000);
//     controller.createCity("Cusco", -13.5320, 71.9675, 428450);
//     controller.createCity("Sydney", -33.8688, 151.2093, 5100000);
//     controller.createCity("Vancouver", 49.2827, 123.1207, 675218);
//     expect(controller.getPopulation()).toBe(7838668);
// });

// test('what is my city index', () => {
//     const controller = new cityStuff.Community();
//     controller.createCity("Pryp'yat'", 51.4045, 30.0542, 0);
//     controller.createCity("Calgary", 51.0447, 114.0719, 1635000);
//     controller.createCity("Cusco", -13.5320, 71.9675, 428450);
//     controller.createCity("Sydney", -33.8688, 151.2093, 5100000);
//     controller.createCity("Vancouver", 49.2827, 123.1207, 675218);
//     expect(controller.cityIndex("Cusco")).toBe(2);
//     expect(controller.cityIndex("Vancouver")).toBe(4);
// });

// test('does it find my specific city', () => {
//     const controller = new cityStuff.Community();
//     controller.createCity("Pryp'yat'", 51.4045, 30.0542, 0);
//     controller.createCity("Calgary", 51.0447, 114.0719, 1635000);
//     controller.createCity("Cusco", -13.5320, 71.9675, 428450);
//     controller.createCity("Sydney", -33.8688, 151.2093, 5100000);
//     expect(controller.cityFinder("Calgary")).toEqual({ "key": 2, "latitude": 51.0447, "longitude": 114.0719, "name": "Calgary", "population": 1635000 });
//     expect(controller.cityFinder("Sydney")).toEqual({ "key": 4, "latitude": -33.8688, "longitude": 151.2093, "name": "Sydney", "population": 5100000 });
// });

// test('does it increase the population', async () => {
//     const url = 'http://127.0.0.1:5000/';
//     let data = await fetching.postData(url + 'clear');
//     const controller = new cityStuff.Community();
//     controller.createCity("Pryp'yat'", 51.4045, 30.0542, 0);
//     controller.createCity("Calgary", 51.0447, 114.0719, 1635000);
//     controller.increasePopulation("Pryp'yat'", 1000);
//     expect(controller.cityList[0].currentPopulation()).toBe(1000);
//     controller.increasePopulation("Calgary", 1000000);
//     expect(controller.cityList[1].currentPopulation()).toBe(2635000);
// });

// test('does it decrease the population', async () => {
//     const url = 'http://127.0.0.1:5000/';
//     let data = await fetching.postData(url + 'clear');
//     const controller = new cityStuff.Community();
//     controller.createCity("Calgary", 51.0447, 114.0719, 1635000);
//     controller.createCity("Pryp'yat'", 51.4045, 30.0542, 10000);
//     expect(controller.decreasePopulation("Calgary", 200000)).toBe(1435000);
//     expect(controller.decreasePopulation("Pryp'yat'", 10000)).toBe(0);
//     console.log("Chernobyl Meltdown!!!");
// });

// test('does it wipe the city from the planet', async () => {
//     const url = 'http://127.0.0.1:5000/';
//     let data = await fetching.postData(url + 'clear');
//     const controller = new cityStuff.Community();
//     controller.createCity("Pryp'yat'", 51.4045, 30.0542, 0);
//     controller.createCity("Calgary", 51.0447, 114.0719, 1635000);
//     controller.deleteCity("Pryp'yat'");
//     expect(controller.cityList).toEqual([{ key: 2, latitude: 51.0447, longitude: 114.0719, name: "Calgary", population: 1635000 }]);
//     controller.deleteCity("Calgary");
//     expect(controller.cityList).toEqual([]);
// });

// test('does the key counter work', async () => {
//     const controller = new cityStuff.Community();
//     expect(controller.counter).toBe(1);
//     controller.createCity("Pryp'yat'", 51.4045, 30.0542, 0);
//     expect(controller.counter).toBe(2);
//     controller.createCity("Calgary", 51.0447, 114.0719, 1635000);
//     expect(controller.counter).toBe(3);
// });

// test('whats the highest key', async () => {
//     const url = 'http://127.0.0.1:5000/';
//     const controller = new cityStuff.Community();
//     await controller.updateCities();
//     expect(controller.highestKey()).toBe(3);
// });