// Start of Cities and Community project -section 130D
import cityStuff from './CityAndCommunity.js';
import domFuncs from './CCDOM.js';
import fetchFunctions from './fetch.js'

let cityController = new cityStuff.Community();
const url="http://127.0.0.1:5000/"
let i = 0;


// window.addEventListener('click', function (event) {
//     console.log(event.target);
// });

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
        updateFields();
        i++;
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
    IDmostNorthern.textContent=cityController.getMostNorthern();
    IDmostSouthern.textContent=cityController.getMostSouthern();
    IDtotalPop.textContent=cityController.getPopulation();
};


