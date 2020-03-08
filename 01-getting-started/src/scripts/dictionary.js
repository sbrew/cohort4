const provinces = {

    lookupProv: (code) => {

        const provinceTable = {
            "AB": "Alberta",
            "BC": "British Columbia",
            "MB": "Manitoba",
            "NB": "New Brunswick",
            "NL": "Newfoundland and Labrador",
            "NS": "Nova Scotia",
            "NT": "Northwest Territories",
            "NU": "Nunavut",
            "ON": "Ontario",
            "PE": "Prince Edward Island",
            "QC": "Québec",
            "SK": "Saskatchewan",
            "YT": "Yukon"
        };


        //the following works as a check to ensure lower case will be read as well
        const checkProv = code.toUpperCase();
        //this takes the input and checks if it is in the predefined object
        if (checkProv in provinceTable) return provinceTable[checkProv];
        else return "";

    }

};


export default provinces;