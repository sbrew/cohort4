import fetchFunctions from './fetch.js'

class City {

    constructor(name, latitude, longitude, population, key) {
        this.name = name;
        this.latitude = latitude;
        this.longitude = longitude;
        this.population = population;
        this.key = key;
    }

    show() {
        let string = "";
        return string += `${this.name} is located at ${this.latitude} latitude and ${this.longitude} longitude, with a population of ${this.population}`;
    }

    movedIn(immigration) {
        this.population = this.population + immigration;
    }

    movedOut(emigration) {
        this.population = this.population - emigration;
    }

    currentPopulation() {
        return this.population;
    }

    howBig() {
        if (this.population > 100000) return "City";
        if (this.population >= 20000) return "Large town";
        if (this.population >= 1000) return "Town";
        if (this.population > 100) return "Village";
        if (this.population >= 1) return "Hamlet";
        return "Ghost Town";
    }
};

class Community {
    constructor() {
        this.cityList = [];
        this.counter = 1;
        //this.myFav = {}; //still unsure of why using this
        this.url = "http://127.0.0.1:5000/";
    }

    nextKey() {
        return `k${this.counter++}`;
    }

    async createCity(name, latitude, longitude, population) {
        // try {
            let key = this.nextKey();
            this.cityList.push(new City(name, latitude, longitude, population, key));
            // this.myFav[key] = myFav;
            let data = await fetchFunctions.postData(this.url + "add", { name: name, latitude: latitude, longitude: longitude, population: population, key: key });
            return data;
        // } catch {
        //     console.log("error");
        // }
    }

    whichSphere(local) {
        var str = this.cityFinder(local).latitude;
        if (str > 0) {
            return `This location is in the Northern Hemisphere`;
        }
        else if (str < 0) {
            return `This location is in the Southern Hemisphere`;
        }
        return "This location is on the Equator";
    }

    getMostNorthern() {
        let string = "";
        return string += `${Object.values(this.cityList.reduce((a, b) => b.latitude > a.latitude ? b : a))}`;
    }

    getMostSouthern() {
        let string = "";
        return string += `${Object.values(this.cityList.reduce((a, b) => b.latitude < a.latitude ? b : a))}`;
    }

    getPopulation() {
        let sum = 0;
        for (var i = 0; i < this.cityList.length; i++) {
            sum = sum + this.cityList[i].population;
        }
        return sum;
    }

    cityFinder(local) {
        let index = this.cityList.findIndex(city => city.name === local);
        return this.cityList[index];
    }

    increasePopulation(local, amount) {
        this.cityFinder(local).movedIn(amount);
        return this.cityFinder(local).currentPopulation();
    }

    decreasePopulation(local, amount) {
        this.cityFinder(local).movedOut(amount);
        return this.cityFinder(local).currentPopulation();
    }

    deleteCity(local) {
        this.cityList.splice(this.cityFinder(local), 1);
    }
};

export default { City, Community };