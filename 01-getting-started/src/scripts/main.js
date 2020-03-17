import functions from './functions.js';
import calcFunctions from './calc.js';
import taxFunctions from './taxes.js';
import arrayFunctions from './arrays.js';
import provinces from './dictionary.js'

// **********
//
// Add the event listeners


// Size
idNumber.addEventListener('change', (() => {
    idNumberSize.textContent = functions.size(idNumber.value);
}));
// Calculator
myCalc.addEventListener("click", function () {
    if (add.checked) {
        calcAnswer.innerHTML = calcFunctions.addition(Number(number1.value), Number(number2.value));
    } else if (minus.checked) {
        calcAnswer.textContent = calcFunctions.subtraction(parseInt(number1.value), parseInt(number2.value));
    } else if (multiply.checked) {
        calcAnswer.textContent = calcFunctions.multiply(parseInt(number1.value), parseInt(number2.value));
    } else if (divide.checked) {
        calcAnswer.textContent = calcFunctions.divide(parseInt(number1.value), parseInt(number2.value));
    }
});

//divide.checked is the equivalent of document.getElementsByName("drone")[3].checked

// taxes
taxButton.addEventListener("click", function () {
    taxDiv.innerHTML = "$" + taxFunctions.taxCalc(incomeTax.value);
});

//Arrays

let myArray = [];

addArr.addEventListener('click', function () {
    // console.log(isNaN(Number(arrayInput.value)))
    if (isNaN((arrayInput.value))) {
        messageArea.innerHTML = "The input is not a valid number";
    }
    else {
        myArray = arrayFunctions.addArray(myArray, Number(arrayInput.value));
        messageArea.innerHTML = "The number has been added to the array";
    }


});


// try array.filter(num => num === Number) to only allow numbers into array

showArr.addEventListener('click', function () {
    messageArea.innerHTML = arrayFunctions.showArray(myArray, Number(arrayInput.value));
});

sumArr.addEventListener('click', function () {
    messageArea.innerHTML = arrayFunctions.totalArray(myArray, Number(arrayInput.value));
});

clearArr.addEventListener('click', function () {
    myArray.length = 0;
    //remember to set the array length to 0 before clearing the elements in the array
    messageArea.innerHTML = arrayFunctions.clearArray(myArray);
});

// Dictionary
lookUp.addEventListener('click', function () {
    let provinceFull = provinces.lookupProv(itemLookUp.value);
    if (provinceFull === "") dictionaryMessage.textContent = "You sure you're in Canada?"
    else dictionaryMessage.textContent = provinceFull;

});

