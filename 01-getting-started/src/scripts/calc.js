
const calcFunctions = {

    addition: (num1, num2) => {
        let calculated = num1 + num2;
        calculate(calculated)
        return calculate;
    },

    subtraction: (num1, num2) => {
        let calculated = num1 - num2;
        calculate(calculated)
        return calculate;
    },

    multiply: (num1, num2) =>{
        let calculated = num1 * num2;
        calculate(calculated)
        return calculate;
    },

    divide: (num1, num2) =>{
        let calculated = num1 / num2;
        calculate(calculated)
        return calculate;
    }
        

};

export default calcFunctions;

function calculate(calculated) {
    document.getElementById("calcAnswer").innerHTML=calculated
    return null;
}