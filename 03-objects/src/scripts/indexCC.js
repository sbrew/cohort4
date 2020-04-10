// Start of Cities and Community project -section 130D
import cityStuff from './CityAndCommunity.js';
import domFuncs from './CCDOM.js';
import fetchFunctions from './fetch.js'
import CityAndCommunity from './CityAndCommunity.js';

let cityController = new cityStuff.Community();
const url="http://127.0.0.1:5000/"
let i = 0;
let key = 0;

window.addEventListener('click', function (event) {
    console.log(event.target);
});

window.addEventListener('DOMContentLoaded', async () => {
    let data = await fetchFunctions.postData('http://127.0.0.1:5000/all');
    
    console.log(data);
});

createCityID.addEventListener('click', async () => {
    if (nameInputID.value.length > 0 && latitudeInputID.value.length > 0 && longitudeInputID.value.length > 0 && populationInputID.value.length > 0) {
        cityController.createCity(nameInputID.value, Number(latitudeInputID.value), Number(longitudeInputID.value), Number(populationInputID.value));
        domFuncs.addBefore(domBoxID, cityController.cityList[i]);
        document.getElementById(`${cityController.cityList[i].name}hemisphereDisplayID`).textContent = cityController.whichSphere(cityController.cityList[i].name);
        document.getElementById(`${cityController.cityList[i].name}citySizeID`).textContent = cityController.cityList[i].howBig();
        await fetchFunctions.postData(url + "add", {name:nameInputID.value, latitude:50, longitude:100, population:50000, key:key});
        i++;
        key++;
        clearFields();
    }
});

window.addEventListener('click', async () => {
    if (event.target.textContent === 'Remove City') {
        domFuncs.deleteDiv(event.target.parentElement);
        cityController.deleteCity(event.target.parentElement.id);
        i--;
    }
    if (event.target.textContent === 'Moved In') {
        document.getElementById(`span${event.target.parentElement.id}`).textContent = `Population: ${cityController.increasePopulation(event.target.parentElement.id, Number(document.getElementById(`${event.target.parentElement.id}updatedPopulationID`).value))} `;
        // document.getElementById(`${event.target.parentElement.id}citySizeID`).textContent = `Population: ${cityController.increasePopulation(event.target.parentElement.id, Number(document.getElementById(`${event.target.parentElement.id}updatedPopulationID`).value))} `;
    }
    if (event.target.textContent === 'Moved out') {
        document.getElementById(`span${event.target.parentElement.id}`).textContent = `Population: ${cityController.decreasePopulation(event.target.parentElement.id, Number(document.getElementById(`${event.target.parentElement.id}updatedPopulationID`).value))} `;
    }

});

function clearFields() {
    nameInputID.value = "";
    latitudeInputID.value = "";
    longitudeInputID.value = "";
    populationInputID.value = "";
};


