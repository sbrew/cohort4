
const taxFunctions = {



    taxCalc: (grossIncome) => {

        if (grossIncome <= 48535) {
            return (grossIncome * 0.15).toFixed(2);
        }

        else if (grossIncome > 48535 && grossIncome <= 97069) {
            return (((grossIncome - 48535) * 0.205) + 7280.25).toFixed(2); 
        }

        else if (grossIncome > 97069 && grossIncome <= 150473) {
            return (((grossIncome - 97069) * 0.26) + 17229.72).toFixed(2);
        }

        else if (grossIncome > 150473 && grossIncome <= 214638) {
            return (((grossIncome - 150473) * 0.29) + 31114.76).toFixed(2);
        }

        else {
            return (((grossIncome - 214638) * 0.33) + 49644.31).toFixed(2);
        }

    }

}; 

export default taxFunctions;

