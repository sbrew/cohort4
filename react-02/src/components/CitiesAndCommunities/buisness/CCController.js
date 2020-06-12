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
        this.randomCityList = [
            { "cityName": "Baie-Saint-Paul", "latitude": "-19.91271", "longitude": "78.6335", "population": 5869 },
            { "cityName": "Sint-Martens-Bodegem", "latitude": "19.41248", "longitude": "-75.62003", "population": 9830 },
            { "cityName": "Melton Mowbray", "latitude": "37.00614", "longitude": "-62.51634", "population": 9421 },
            { "cityName": "Edmonton", "latitude": "61.92033", "longitude": "-142.99598", "population": 6411 },
            { "cityName": "Sovizzo", "latitude": "-21.05468", "longitude": "49.05647", "population": 2509 },
            { "cityName": "Burnpur", "latitude": "-50.13537", "longitude": "143.82396", "population": 4173 },
            { "cityName": "Seilles", "latitude": "55.74683", "longitude": "-2.49178", "population": 5295 },
            { "cityName": "Bailivre", "latitude": "-28.17031", "longitude": "7.65742", "population": 6188 },
            { "cityName": "Zaventem", "latitude": "25.30323", "longitude": "-77.4943", "population": 3168 },
            { "cityName": "Battagram", "latitude": "-47.90457", "longitude": "168.71155", "population": 6172 },
            { "cityName": "Miryang", "latitude": "-47.78958", "longitude": "-38.95628", "population": 818 },
            { "cityName": "Raichur", "latitude": "52.45083", "longitude": "16.84508", "population": 7536 },
            { "cityName": "Bergen op Zoom", "latitude": "28.06982", "longitude": "107.34088", "population": 3752 },
            { "cityName": "Krasnoarmeysk", "latitude": "-51.374", "longitude": "-118.07523", "population": 4560 },
            { "cityName": "Grangemouth", "latitude": "-83.3979", "longitude": "-48.53996", "population": 540 },
            { "cityName": "Sint-Genesius-Rode", "latitude": "32.38998", "longitude": "-23.79729", "population": 5376 },
            { "cityName": "Borgone Susa", "latitude": "-34.8752", "longitude": "146.46609", "population": 4238 },
            { "cityName": "Plato", "latitude": "-89.05806", "longitude": "1.20719", "population": 9795 },
            { "cityName": "Wolkrange", "latitude": "66.20923", "longitude": "16.61179", "population": 587 },
            { "cityName": "Renlies", "latitude": "34.44434", "longitude": "19.00039", "population": 6284 },
            { "cityName": "Reus", "latitude": "-49.56738", "longitude": "-173.271", "population": 6770 },
            { "cityName": "Kohat", "latitude": "82.74714", "longitude": "179.48745", "population": 7863 },
            { "cityName": "Chandannagar", "latitude": "3.49626", "longitude": "-113.34996", "population": 2240 },
            { "cityName": "Nelson", "latitude": "33.83327", "longitude": "144.55949", "population": 8196 },
            { "cityName": "Ganshoren", "latitude": "-26.94911", "longitude": "-6.21822", "population": 8669 },
            { "cityName": "Antártica", "latitude": "87.59367", "longitude": "-12.40918", "population": 8292 },
            { "cityName": "Montereale", "latitude": "-82.65789", "longitude": "-63.09214", "population": 8047 },
            { "cityName": "Bensheim", "latitude": "-41.67592", "longitude": "64.5489", "population": 2819 },
            { "cityName": "Middlesbrough", "latitude": "-47.23586", "longitude": "-174.92755", "population": 9594 },
            { "cityName": "Hope", "latitude": "-85.54718", "longitude": "-89.94943", "population": 1131 },
            { "cityName": "Great Yarmouth", "latitude": "37.69296", "longitude": "111.60221", "population": 5183 },
            { "cityName": "Ahrensburg", "latitude": "-3.35562", "longitude": "109.23725", "population": 3067 },
            { "cityName": "Montauban", "latitude": "88.07198", "longitude": "43.2813", "population": 6791 },
            { "cityName": "Carbonear", "latitude": "13.20283", "longitude": "140.20091", "population": 4168 },
            { "cityName": "Balıkesir", "latitude": "-72.03081", "longitude": "-131.2775", "population": 9603 },
            { "cityName": "Meridian", "latitude": "-32.92381", "longitude": "43.07992", "population": 2983 },
            { "cityName": "Rionero in Vulture", "latitude": "75.53725", "longitude": "84.35279", "population": 1205 },
            { "cityName": "Banjarmasin", "latitude": "38.77812", "longitude": "-154.51729", "population": 7945 },
            { "cityName": "Le Cannet", "latitude": "29.237", "longitude": "143.0642", "population": 9481 },
            { "cityName": "Landenne", "latitude": "79.01489", "longitude": "17.52824", "population": 5317 },
            { "cityName": "Provost", "latitude": "24.16407", "longitude": "-12.68094", "population": 9220 },
            { "cityName": "Telfs", "latitude": "0.44573", "longitude": "-84.49531", "population": 4101 },
            { "cityName": "Berceto", "latitude": "89.06501", "longitude": "-131.80843", "population": 8895 },
            { "cityName": "Tasikmalaya", "latitude": "55.94153", "longitude": "-76.93175", "population": 4422 },
            { "cityName": "Korkino", "latitude": "74.04449", "longitude": "26.1578", "population": 8979 },
            { "cityName": "Rocca Santo Stefano", "latitude": "-83.84208", "longitude": "-170.08362", "population": 4776 },
            { "cityName": "Mold", "latitude": "89.75861", "longitude": "138.8429", "population": 9251 },
            { "cityName": "Tulln an der Donau", "latitude": "74.3375", "longitude": "22.15902", "population": 2534 },
            { "cityName": "Vijayawada", "latitude": "39.49911", "longitude": "24.50189", "population": 1639 },
            { "cityName": "Westrem", "latitude": "-57.53708", "longitude": "133.65325", "population": 2800 },
            { "cityName": "Concepción", "latitude": "-6.65796", "longitude": "2.37676", "population": 307 },
            { "cityName": "Opheylissem", "latitude": "-38.98528", "longitude": "34.22405", "population": 1938 },
            { "cityName": "Yemanzhelinsk", "latitude": "-8.02914", "longitude": "52.31864", "population": 9647 },
            { "cityName": "West Valley City", "latitude": "-4.1724", "longitude": "103.96574", "population": 6477 },
            { "cityName": "Fort McPherson", "latitude": "-11.31959", "longitude": "150.69768", "population": 7391 },
            { "cityName": "Graz", "latitude": "-84.57857", "longitude": "-163.57099", "population": 6384 },
            { "cityName": "Rockville", "latitude": "-32.60998", "longitude": "142.79076", "population": 9291 },
            { "cityName": "Klabbeek", "latitude": "-34.43392", "longitude": "-89.91851", "population": 2002 },
            { "cityName": "Rijkevorsel", "latitude": "19.49389", "longitude": "-129.8062", "population": 6434 },
            { "cityName": "Landau", "latitude": "-84.02156", "longitude": "168.20545", "population": 6986 },
            { "cityName": "Aiseau", "latitude": "69.57179", "longitude": "83.31721", "population": 1824 },
            { "cityName": "Dessel", "latitude": "14.19141", "longitude": "33.80014", "population": 1855 },
            { "cityName": "Vannes", "latitude": "1.46328", "longitude": "-19.56113", "population": 9887 },
            { "cityName": "Morrinsville", "latitude": "-81.72392", "longitude": "-119.16062", "population": 4108 },
            { "cityName": "Changwon", "latitude": "-40.23116", "longitude": "-104.86596", "population": 1987 },
            { "cityName": "Melle", "latitude": "5.35946", "longitude": "-53.91977", "population": 9823 },
            { "cityName": "Fauglia", "latitude": "59.80329", "longitude": "-8.50848", "population": 2616 },
            { "cityName": "Groenlo", "latitude": "-85.50971", "longitude": "0.5863", "population": 5710 },
            { "cityName": "Hathras", "latitude": "-1.1037", "longitude": "132.59134", "population": 7876 },
            { "cityName": "Cereté", "latitude": "-87.59001", "longitude": "-35.53275", "population": 7764 },
            { "cityName": "Jonesboro", "latitude": "27.75919", "longitude": "-155.38458", "population": 865 },
            { "cityName": "Lakeland County", "latitude": "64.14636", "longitude": "-2.76327", "population": 3399 },
            { "cityName": "Schore", "latitude": "76.11423", "longitude": "-44.21233", "population": 7836 },
            { "cityName": "Badin", "latitude": "-49.26821", "longitude": "97.611", "population": 1262 },
            { "cityName": "Stoke-on-Trent", "latitude": "4.84997", "longitude": "-69.93465", "population": 3511 },
            { "cityName": "Baltasound", "latitude": "-47.97228", "longitude": "102.24206", "population": 4212 },
            { "cityName": "Kermt", "latitude": "-68.77506", "longitude": "80.77663", "population": 3629 },
            { "cityName": "Fleurus", "latitude": "70.0847", "longitude": "86.553", "population": 2810 },
            { "cityName": "Birmingham", "latitude": "22.3327", "longitude": "84.34251", "population": 7684 },
            { "cityName": "Sart-Dames-Avelines", "latitude": "71.01771", "longitude": "161.23271", "population": 3940 },
            { "cityName": "Mount Isa", "latitude": "-74.53096", "longitude": "59.8788", "population": 7940 },
            { "cityName": "Bajaur Agency", "latitude": "-53.86549", "longitude": "36.08938", "population": 8312 },
            { "cityName": "Jandrain-Jandrenouille", "latitude": "58.051", "longitude": "-160.46782", "population": 2195 },
            { "cityName": "San Cristóbal de la Laguna", "latitude": "42.75436", "longitude": "178.51031", "population": 9405 },
            { "cityName": "Haridwar", "latitude": "46.32017", "longitude": "-42.31782", "population": 9347 },
            { "cityName": "Annapolis County", "latitude": "-86.68608", "longitude": "-145.13682", "population": 9230 },
            { "cityName": "Thames", "latitude": "1.70635", "longitude": "-80.15036", "population": 9910 },
            { "cityName": "Cereté", "latitude": "-8.91876", "longitude": "2.7759", "population": 3359 },
            { "cityName": "San Isidro", "latitude": "-70.85727", "longitude": "107.52554", "population": 4766 },
            { "cityName": "Beauwelz", "latitude": "-56.13811", "longitude": "-0.6938", "population": 7882 },
            { "cityName": "Ambon", "latitude": "-87.99701", "longitude": "-43.70537", "population": 2540 },
            { "cityName": "Salvirola", "latitude": "41.92729", "longitude": "19.495", "population": 6861 },
            { "cityName": "Heidelberg", "latitude": "-80.27067", "longitude": "-10.08616", "population": 9209 },
            { "cityName": "Nyandoma", "latitude": "-33.35016", "longitude": "-51.05827", "population": 3570 },
            { "cityName": "StrŽe", "latitude": "71.81934", "longitude": "70.76097", "population": 959 },
            { "cityName": "Snaaskerke", "latitude": "57.2676", "longitude": "-59.63216", "population": 8571 },
            { "cityName": "Bergama", "latitude": "-76.96974", "longitude": "-35.24578", "population": 437 },
            { "cityName": "Hoeke", "latitude": "-26.13727", "longitude": "-131.77874", "population": 3108 },
            { "cityName": "Delicias", "latitude": "57.5513", "longitude": "78.27262", "population": 9160 },
            { "cityName": "Erembodegem", "latitude": "-26.4184", "longitude": "-110.77687", "population": 9170 }
        ];
        this.counter = 1;
        this.url = "http://127.0.0.1:5000/";
    }

    nextKey() {
        return this.counter++;
    }

    async createCity(name, latitude, longitude, population) {
        if (!name) {
            return 'City name can not be blank';
        } else if (!latitude) {
            return 'Need to enter a Latitude';
        } else if (!longitude) {
            return 'Need to enter a Longitude';
        } else if (!population) {
            return 'Need to enter Population amount';
        } else {
            let key = this.nextKey();
            this.cityList.push(new City(name, latitude, longitude, population, key));
            await fetching.postData(this.url + "add", { name: name, latitude: latitude, longitude: longitude, population: population, key: key });
            // return this.cityList;
        }
        
    }

    async updateCities() {
        // console.log('~~~~~~before the await~~~~~~')
        let data = await fetching.postData(this.url + 'all');
        // console.log('~~~~~~after the await~~~~~~')
        data.forEach(value => {
            this.cityList.push(new City(value.name, Number(value.latitude), Number(value.longitude), Number(value.population), (value.key)));
            this.whichSphere(value.name);
            // return this.cityList;
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

     async generateRandomCity() {
        let random = Math.floor(Math.random() * this.randomCityList.length)
        let randomGen = this.randomCityList.splice(Number(random), 1);
        await randomGen.forEach(value => {
            let key= this.nextKey();
            this.cityList.push(new City(value.cityName, Number(value.latitude), Number(value.longitude), Number(value.population), (key)));
            let data = fetching.postData(this.url + "add", { name: value.cityName, latitude: value.latitude, longitude: value.longitude, population: value.population, key: key });
            this.whichSphere(value.cityName);
            return data;
        });
        this.counter = this.highestKey();
        return this.cityList;
    }
};


export default { Community, City };