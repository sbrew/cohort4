import functions from './functions.js';
import calcFunctions from './calc.js';
import taxFunctions from './taxes.js';

// **********
//
// Add the event listeners
// 

idNumber.addEventListener('change', (() => {
    idNumberSize.textContent = functions.size(idNumber.value);
}));
// calculator
document.getElementById('myCalc').onclick = (function () {
    // console.log(document.getElementsByName("drone")) used to figure out which array was highlighted
    let num1 = Number(document.getElementById('number1').value)
    let num2 = Number(document.getElementById('number2').value)
    //let radiobutton = document.getElementsByClassName("drones")

    if (document.getElementsByName("drone")[0].checked) {
        calcFunctions.addition(num1, num2);
    } else if (document.getElementsByName("drone")[1].checked) {
        calcFunctions.subtraction(num1, num2);
    }  else if (document.getElementsByName("drone")[2].checked) {
        calcFunctions.multiply(num1, num2);
    } else if (document.getElementsByName("drone")[3].checked) {
        calcFunctions.divide(num1, num2);
    }


});




// taxes
document.getElementById('taxButton').onclick = (function () {
    let grossIncome = parseInt(document.getElementById("incomeTax").value);
    taxFunctions.taxCalc(grossIncome);
});



