import fetching from '../buisness/functions'

class City {

    constructor(name, latitude, longitude, population, key) {
        this.name = name;
        this.latitude = Number(latitude);
        this.longitude = Number(longitude);
        this.population = Number(population);
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
        this.url = "http://127.0.0.1:5000/";
    }

    nextKey() {
        return this.counter++;
    }

    async createCity(name, latitude, longitude, population) {
        let key = this.nextKey();
        this.cityList.push(new City(name, latitude, longitude, population, key));
        let data = await fetching.postData(this.url + "add", { name: name, latitude: latitude, longitude: longitude, population: population, key: key });
        return data;
    }

    async updateCities() {
        let data = await fetching.postData(this.url + 'all');
        data.forEach(value => {
            this.cityList.push(new City(value.name, Number(value.latitude), Number(value.longitude), Number(value.population), (value.key)));
            this.whichSphere(value.name);
            return this.cityList;
        });
        this.counter = this.highestKey();
        return this.cityList;
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
        if (this.cityList.length > 0) {
            let mostNorthern = this.cityList[0];
            this.cityList.forEach(value => {
                if (value.latitude > mostNorthern.latitude) {
                    mostNorthern = value;
                }
            })
            let string = `${mostNorthern.name} at ${mostNorthern.latitude}° latitude`;
            return string;
        }
    }

    getMostSouthern() {
        if (this.cityList.length > 0) {
            //     let string = "";
            //     return string += `${Object.values(this.cityList.reduce((a, b) => b.latitude < a.latitude ? b : a))}`;
            // }
            let mostSouthern = this.cityList[0];
            this.cityList.forEach(value => {
                if (value.latitude < mostSouthern.latitude) {
                    mostSouthern = value;
                }
            })
            let string = `${mostSouthern.name} at ${mostSouthern.latitude}° latitude`;
            return string;
        }
    }

    getPopulation() {
        let sum = 0;
        for (var i = 0; i < this.cityList.length; i++) {
            sum = sum + this.cityList[i].population;
        }
        return sum;
    }

    cityIndex(local) {
        let index = this.cityList.findIndex(city => city.name === local);
        return index;
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

    async updatePopulation(local, keySpec) {
        let updated = this.cityFinder(local);
        let data = await fetching.postData(this.url + 'update', { key: keySpec, name: updated.name, latitude: updated.latitude, population: updated.population, longitude: updated.longitude });
        return data;
    }

    async deleteCity(local, keySpec) {
        this.cityList.splice(this.cityIndex(local), 1);
        let data = await fetching.postData(this.url + 'delete', { key: keySpec });
        return data;
    }

    highestKey() {
        let newKeys = 0;
        if (this.cityList.length > 0) {
            this.cityList.forEach(value => {
                if (value.key > newKeys) {
                    newKeys = value.key;
                }
            })
        }
        return newKeys + 1;
    }
};

export default Community;