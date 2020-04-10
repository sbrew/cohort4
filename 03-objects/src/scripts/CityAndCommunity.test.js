import cityStuff from './CityAndCommunity';
import domFuncs from './CCDOM';

test('does the class work', () => {
    let city = new cityStuff.City("Calgary", 51.0447, 114.0719, 1635000);
    expect(city).toBeInstanceOf(cityStuff.City);
});

test('does the constructor work', () => {
    let city = new cityStuff.City("Calgary", 51.0447, 114.0719, 1635000);
    expect(city.name).toBe("Calgary");
    expect(city.latitude).toBe(51.0447);
    expect(city.longitude).toBe(114.0719);
    expect(city.population).toBe(1635000);
});

test('does the show func work', () => {
    let city = new cityStuff.City("Calgary", 51.0447, 114.0719, 1635000);
    let city2 = new cityStuff.City("Vancouver", 49.2827, 123.1207, 675218);
    expect(city.show()).toBe(`Calgary is located at 51.0447 latitude and 114.0719 longitude, with a population of 1635000`);
    expect(city2.show()).toBe(`Vancouver is located at 49.2827 latitude and 123.1207 longitude, with a population of 675218`);
});

test('are people moving in', () => {
    let city = new cityStuff.City("Calgary", 51.0447, 114.0719, 1635000);
    city.movedIn(300000);
    expect(city.population).toBe(1935000);
    let city2 = new cityStuff.City("Vancouver", 49.2827, 123.1207, 675218);
    city2.movedIn(5000);
    expect(city2.population).toBe(680218);
});

test('are people moving out', () => {
    let city = new cityStuff.City("Calgary", 51.0447, 114.0719, 1635000);
    city.movedOut(25000);
    expect(city.population).toBe(1610000);
    let city2 = new cityStuff.City("Vancouver", 49.2827, 123.1207, 675218);
    city2.movedOut(5000);
    expect(city2.population).toBe(670218);
});

test('how big is that place', () => {
    let city = new cityStuff.City("Calgary", 51.0447, 114.0719, 1635000);
    expect(city.howBig()).toBe("City");
    let city2 = new cityStuff.City("Phoenix", 33.4484, 112.0740, 25288);
    expect(city2.howBig()).toBe("Large town");
    let city3 = new cityStuff.City("Seattle", 47.6062, 122.3321, 15354);
    expect(city3.howBig()).toBe("Town");
    let city4 = new cityStuff.City("Beiseker", 51.3843, 113.5363, 819);
    expect(city4.howBig()).toBe("Village");
    let city5 = new cityStuff.City("Tilt Cove", 49.8871, 55.6316, 5);
    expect(city5.howBig()).toBe("Hamlet");
    let city6 = new cityStuff.City("Pryp'yat'", 51.4045, 30.0542, 0);
    expect(city6.howBig()).toBe("Ghost Town");
});

test('does it add to the community controller', () => {
    const controller = new cityStuff.Community();
    expect(controller.createCity("Calgary", "51.0447 N", 114.0719, 1635000)).toEqual([{ name: 'Calgary', latitude: "51.0447 N", longitude: 114.0719, population: 1635000 }]);
    expect(controller.createCity("Pryp'yat'", "51.4045 N", 30.0542, 0)).toEqual([{ name: 'Calgary', latitude: "51.0447 N", longitude: 114.0719, population: 1635000 }, { name: "Pryp'yat'", latitude: "51.4045 N", longitude: 30.0542, population: 0 }]);
});

test('does it check the hemisphere', () => {
    const controller = new cityStuff.Community();
    controller.createCity("Calgary", 51.0447, 114.0719, 1635000);
    expect(controller.whichSphere("Calgary")).toBe(`This location is in the Northern Hemisphere`);
    controller.createCity("Sydney", -33.8688, 151.2093, 5100000);
    expect(controller.whichSphere("Sydney")).toBe(`This location is in the Southern Hemisphere`);
});

test('which is the most northern city', () => {
    const controller = new cityStuff.Community();
    controller.createCity("Cusco", -13.5320, 71.9675, 428450);
    controller.createCity("Sydney", -33.8688, 151.2093, 5100000);
    expect(controller.getMostNorthern()).toBe("Cusco,-13.532,71.9675,428450");
    controller.createCity("Calgary", 51.0447, 114.0719, 1635000);
    expect(controller.getMostNorthern()).toBe("Calgary,51.0447,114.0719,1635000");
    // controller.createCity("Pryp'yat'", "51.4045 N", 30.0542, 0);
});

test('which is the most southern city', () => {
    const controller = new cityStuff.Community();
    controller.createCity("Pryp'yat'", 51.4045, 30.0542, 0);
    controller.createCity("Calgary", 51.0447, 114.0719, 1635000);
    expect(controller.getMostSouthern()).toBe("Calgary,51.0447,114.0719,1635000");
    controller.createCity("Cusco", -13.5320, 71.9675, 428450);
    expect(controller.getMostSouthern()).toBe("Cusco,-13.532,71.9675,428450");
});

test('what is the gloabal population', () => {
    const controller = new cityStuff.Community();
    controller.createCity("Pryp'yat'", 51.4045, 30.0542, 0);
    controller.createCity("Calgary", 51.0447, 114.0719, 1635000);
    controller.createCity("Cusco", -13.5320, 71.9675, 428450);
    controller.createCity("Sydney", -33.8688, 151.2093, 5100000);
    controller.createCity("Vancouver", 49.2827, 123.1207, 675218);
    expect(controller.getPopulation()).toBe(7838668);
});

test('does it increase the population', () => {
    const controller = new cityStuff.Community();
    controller.createCity("Pryp'yat'", 51.4045, 30.0542, 0);
    controller.createCity("Calgary", 51.0447, 114.0719, 1635000);
    controller.increasePopulation("Pryp'yat'",1000);
    expect(controller.cityList[0].currentPopulation()).toBe(1000);
    controller.increasePopulation("Calgary",1000000);
    expect(controller.cityList[1].currentPopulation()).toBe(2635000);
});

test('does it decrease the population', () => {
    const controller = new cityStuff.Community();
    controller.createCity("Calgary", 51.0447, 114.0719, 1635000);
    controller.createCity("Pryp'yat'", 51.4045, 30.0542, 10000);
    expect(controller.decreasePopulation("Calgary",200000)).toBe(1435000);
    expect(controller.decreasePopulation("Pryp'yat'",10000)).toBe(0);
    console.log("Chernobyl Meltdown!!!");
});

test('does it wipe the city from the planet', () => {
    const controller = new cityStuff.Community();
    controller.createCity("Pryp'yat'", 51.4045, 30.0542, 0);
    controller.createCity("Calgary", 51.0447, 114.0719, 1635000);
    controller.deleteCity("Pryp'yat'");
    expect(controller.cityList).toEqual([{ latitude: 51.0447, longitude: 114.0719, name: "Calgary", population: 1635000 }]);
    controller.deleteCity("Calgary");
    expect(controller.cityList).toEqual([]);
});

test('does the DOM function work?', () => {
    const controller = new cityStuff.Community();
    controller.createCity("Pryp'yat'", 51.4045, 30.0542, 0);
    controller.createCity("Calgary", 51.0447, 114.0719, 1635000);
    const element = domFuncs.buildDomCards(controller.cityList[0]);
    expect(element).toBeTruthy();
});

test('does it Add Before?', () => {
    const controller = new cityStuff.Community();
    controller.createCity("Pryp'yat'", 51.4045, 30.0542, 0);
    controller.createCity("Calgary", 51.0447, 114.0719, 1635000);
    const text = controller.cityList;
    const group = document.createElement('div');
    console.log(controller.cityList[1]);
    const element = domFuncs.buildDomCards(text);
    group.appendChild(element);
    expect(group.children.length).toBe(1);
    domFuncs.addBefore(element, controller.cityList[0]);
    expect(group.children.length).toBe(2);
    expect(group.children[0].textContent.substr(0, 30)).toBe("Pryp'yat'Latitude: 51.4045 Lon");
    domFuncs.addBefore(element, controller.cityList[1]);
    expect(group.children[1].textContent.substr(0, 12)).toBe("CalgaryLatit");
});

test('does it delDiv?', () => {
    const group = document.createElement('div');
    const element = domFuncs.buildDomCards('First insert');
    const element2 = domFuncs.buildDomCards('Second insert');
    group.appendChild(element);
    expect(group.children.length).toBe(1);
    group.appendChild(element2);
    expect(group.children.length).toBe(2);
    domFuncs.deleteDiv(element);
    expect(group.children.length).toBe(1);
    domFuncs.deleteDiv(element2);
    expect(group.children.length).toBe(0);
});