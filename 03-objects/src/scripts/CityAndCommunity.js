class City {

    // url: 'http://127.0.0.1:5000/'

    constructor(name, latitude, longitude, population) {
        this.name = name;
        this.latitude = latitude;
        this.longitude = longitude;
        this.population = population;
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
    }

    createCity(name, latitude, longitude, population) {
        this.cityList.push(new City(name, latitude, longitude, population));
        return this.cityList;
    }

    whichSphere(name) {
        let index = this.cityList.findIndex(x => x.name === name);
        var str = this.cityList[index].latitude;
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

    deleteCity(name){
        this.cityList.splice(this.cityList.findIndex(value => value.name == name), 1);
    }
};

export default { City, Community };