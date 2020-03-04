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
    if (document.getElementsByName("drone")[0].checked) {
        calcAnswer.innerHTML = calcFunctions.addition(Number(number1.value), Number(number2.value));
    } else if (document.getElementsByName("drone")[1].checked) {
        calcAnswer.textContent = calcFunctions.subtraction(parseInt(number1.value), parseInt(number2.value));
    }  else if (document.getElementsByName("drone")[2].checked) {
        calcAnswer.textContent = calcFunctions.multiply(parseInt(number1.value), parseInt(number2.value));
    } else if (document.getElementsByName("drone")[3].checked) {
        calcAnswer.textContent = calcFunctions.divide(parseInt(number1.value), parseInt(number2.value));
    }
});

// taxes
taxButton.addEventListener("click", function(){
    taxDiv.innerHTML = "$" + taxFunctions.taxCalc(incomeTax.value);
});


