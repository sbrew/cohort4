// Start of Cities and Community project -section 130D
import cityStuff from './CityAndCommunity.js';
import domFuncs from './CCDOM.js';
import fetchFunctions from './fetch.js'

let cityController = new cityStuff.Community();
let cityList = cityController.cityList;
let url = "http://127.0.0.1:5000/";

window.addEventListener('DOMContentLoaded', async () => {
    let data = await fetchFunctions.postData(url + 'all');
    console.log(data);
    data.forEach(value => {
        cityController.createCity(value.name, Number(value.latitude), Number(value.longitude), Number(value.population), parseFloat(value.key));
        domFuncs.addBefore(domBoxID, cityController.cityList[cityController.cityList.length - 1]);
        document.getElementById(`${cityList[cityList.length - 1].name}hemisphereDisplayID`).textContent = cityController.whichSphere(cityList[cityList.length - 1].name);
        document.getElementById(`${cityList[cityList.length - 1].name}citySizeID`).textContent = cityList[cityList.length - 1].howBig();
    });
    updateFields();
});

// cityController.updateCities();
// console.log(cityController.cityList[i].name);
// document.getElementById(`${cityList[cityList.length - 1].name}hemisphereDisplayID`).textContent = cityController.whichSphere(cityList[cityList.length - 1].name);
// document.getElementById(`${cityList[cityList.length - 1].name}citySizeID`).textContent = cityList[cityList.length - 1].howBig();
// updateFields();
// });



createCityID.addEventListener('click', async () => {
    if (nameInputID.value.length > 0 && latitudeInputID.value.length > 0 && longitudeInputID.value.length > 0 && populationInputID.value.length > 0) {
        cityController.createCity(nameInputID.value, Number(latitudeInputID.value), Number(longitudeInputID.value), Number(populationInputID.value));
        domFuncs.addBefore(domBoxID, cityList[cityList.length - 1]);
        document.getElementById(`${cityList[cityList.length - 1].name}hemisphereDisplayID`).textContent = cityController.whichSphere(cityList[cityList.length - 1].name);
        document.getElementById(`${cityList[cityList.length - 1].name}citySizeID`).textContent = cityList[cityList.length - 1].howBig();
        console.log(cityController);
        updateFields();
        clearFields();
    }
});

window.addEventListener('click', async () => {
    const eTarget = event.target;

    if (eTarget.textContent === 'Remove City') {
        domFuncs.deleteDiv(eTarget.parentElement);
        cityController.deleteCity(eTarget.parentElement.id);
        updateFields();
        i--;
    }
    if (event.target.textContent === 'Moved In') {
        document.getElementById(`span${eTarget.parentElement.id}`).textContent = `Population: ${cityController.increasePopulation(eTarget.parentElement.id, Number(document.getElementById(`${eTarget.parentElement.id}updatedPopulationID`).value))} `;
        document.getElementById(`${eTarget.parentElement.id}citySizeID`).textContent = cityController.cityFinder(eTarget.parentElement.id).howBig();
        updateFields();
    }
    if (event.target.textContent === 'Moved out') {
        document.getElementById(`span${eTarget.parentElement.id}`).textContent = `Population: ${cityController.decreasePopulation(eTarget.parentElement.id, Number(document.getElementById(`${eTarget.parentElement.id}updatedPopulationID`).value))} `;
        document.getElementById(`${eTarget.parentElement.id}citySizeID`).textContent = cityController.cityFinder(eTarget.parentElement.id).howBig();
        updateFields();
    }

});

function clearFields() {
    nameInputID.value = "";
    latitudeInputID.value = "";
    longitudeInputID.value = "";
    populationInputID.value = "";
};

function updateFields() {
    IDmostNorthern.textContent = cityController.getMostNorthern();
    IDmostSouthern.textContent = cityController.getMostSouthern();
    IDtotalPop.textContent = cityController.getPopulation();
};
