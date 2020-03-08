import functions from './functions.js';
import calcFunctions from './calc.js';
import taxFunctions from './taxes.js';
import arrayFunctions from './arrays.js';

// **********
//
// Add the event listeners


// Size
idNumber.addEventListener('change', (() => {
    idNumberSize.textContent = functions.size(idNumber.value);
}));
// Calculator
myCalc.addEventListener("click", function(){
    if (add.checked) {
        calcAnswer.innerHTML = calcFunctions.addition(Number(number1.value), Number(number2.value));
    } else if (minus.checked) {
        calcAnswer.textContent = calcFunctions.subtraction(parseInt(number1.value), parseInt(number2.value));
    }  else if (multiply.checked) {
        calcAnswer.textContent = calcFunctions.multiply(parseInt(number1.value), parseInt(number2.value));
    } else if (divide.checked) {
        calcAnswer.textContent = calcFunctions.divide(parseInt(number1.value), parseInt(number2.value));
    }
});

//divide.checked is the equivalent of document.getElementsByName("drone")[3].checked

// taxes
taxButton.addEventListener("click", function(){
    taxDiv.innerHTML = "$" + taxFunctions.taxCalc(incomeTax.value);
});

//Arrays

addArr.addEventListener('click', function(){
    // if(arrayInput === NaN || arrayInput === String){
    //     message.innerHTML = "The input is not a valid number";}
    arrayFunctions.addArray(Number(arrayInput.value));
    // messageArea.innerHTML = "The number has been added to the array";
    // console.log(arrayFunctions.addArray(Number(arrayInput.value)));
    
});


// try array.filter(num => num === Number) to only allow numbers into array

showArr.addEventListener('click', function(){
    messageArea.innerHTML = arrayFunctions.showArray(arrayInput.value);
});

sumArr.addEventListener('click', function(){
    messageArea.innerHTML = arrayFunctions.totalArray(arrayInput.value);
});

clearArr.addEventListener('click', function(){
    messageArea.innerHTML = arrayFunctions.clearArray(arrayInput.value);
});