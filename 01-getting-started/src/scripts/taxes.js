
const taxFunctions = {



    taxCalc: (grossIncome) => {

        if (grossIncome <= 48535) {
            let taxedIncome = (grossIncome * 0.15).toFixed(2);
            taxedWrite(taxedIncome)
            return taxedIncome;
        }

        else if (grossIncome > 48535 && grossIncome <= 97069) {
            let taxedIncome = (((grossIncome - 48535) * 0.205) + 7280.25).toFixed(2);
            taxedWrite(taxedIncome)
            return taxedIncome;
        }

        else if (grossIncome > 97069 && grossIncome <= 150473) {
            let taxedIncome = (((grossIncome - 97069) * 0.26) + 17229.72).toFixed(2);
            taxedWrite(taxedIncome)
            return taxedIncome;
        }

        else if (grossIncome > 150473 && grossIncome <= 214638) {
            let taxedIncome = (((grossIncome - 150473) * 0.29) + 31114.76).toFixed(2);
            taxedWrite(taxedIncome)
            return taxedIncome;
        }
        else {
            let taxedIncome = (((grossIncome - 214638) * 0.33) + 49644.31).toFixed(2);
            taxedWrite(taxedIncome)
            return taxedIncome; 
        }

    }

}; 

export default taxFunctions;

function taxedWrite(taxedIncome) {
	document.getElementById("taxDiv").innerHTML = "$" + taxedIncome;
    return null;
}