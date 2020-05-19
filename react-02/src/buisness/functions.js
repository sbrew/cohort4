const url = 'http://localhost:5000/';

async function postData(url = '', data = {}) {
    // Default options are marked with *

    const response = await fetch(url, {
        method: 'POST',     // *GET, POST, PUT, DELETE, etc.
        mode: 'cors',       // no-cors, *cors, same-origin
        cache: 'no-cache',  // *default, no-cache, reload, force-cache, only-if-cached
        credentials: 'same-origin', // include, *same-origin, omit
        headers: {
            'Content-Type': 'application/json'
            // 'Content-Type': 'application/x-www-form-urlencoded',
        },
        redirect: 'follow',         // manual, *follow, error
        referrer: 'no-referrer',    // no-referrer, *client
        body: JSON.stringify(data)  // body data type must match "Content-Type" header
    });

    const json = await response.json();    // parses JSON response into native JavaScript objects
    json.status = response.status;
    json.statusText = response.statusText;

    return json;
}

// class Community {

//     constructor() {
//         this.community = {};
//         this.lastKey = 0;
//     }

//     length() {
//         return Object.keys(this.community).length;
//     }

//     get(key) {
//         return this.community[key];
//     }

//     getNewCity() {
//         return new City({});
//     }

//     async getCommunities() {
//         const data = await postData(url + "all");
//         const community = {};
//         data.forEach(x => {
//             community[x.key] = x;
//             this.lastKey = (x.key > this.lastKey) ? x.key : this.lastKey;
//         });
//         this.community = community;
//     }

//     async addOrUpdate(city) {
//         let theAddy;

//         if (city.key) {
//             theAddy = url + "update"
//         } else {
//             theAddy = url + "add"
//             this.lastKey++;
//             city.key = this.lastKey;
//         }

//         await postData(theAddy, city);
//         this.community[city.key]= city;
//     }
// }

// class City {
//     static lastKey = 0;
//     constructor(obj) {
//         const defaults = {name:"", latitude:"", longitude:"", population:"", key:""}
//         const data = {...defaults, ...obj};
//         this.name=data.name;
//         this.latitude=data.latitude;
//         this.longitude=data.longitude;
//         this.population=data.population;
//         this.key=data.key;
//     }

//     newKey(){
//         City.lastKey++;
//         this.key=City.lastKey;
//     }
// }

export default { url, postData};