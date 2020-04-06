const fetchFunctions = {

    url: 'https://jsonplaceholder.typicode.com/users',

    getFirstName(data){
        return data[0].name;
    },

    getFirstNameAll(data){
        let nameList =[];
        return nameList = data.map((d, i, x) => d.name);
    },

    showDelayProblem() {
        console.log('One');
        setTimeout(() => {          // Simulates a fetch
            console.log("Two");
        }, 1 * 1000);
        console.log('Three');       // We have a problem Huston
    },

    async showDelaySolution() {
        try {
            console.log('One');
            const value = await                 // Simulate fetch
                new Promise(
                    (resolve, reject) =>
                        setTimeout(() => resolve("Two"),
                            1 * 2000));
            // Now that we have the value we can use it.
            console.log(value);
            console.log('Three');
        } catch (error) {
            console.log(error);
        }
    },

    async getUsers() {
        try {
            const response = await fetch(fetchFunctions.url);
            const data = await response.json();
            return data;
        } catch (error) {
            console.error('Error:', error);
            throw (error);
        }
    },

    async workWithData() {
        const data = await fetchFunctions.getUsers();
        console.log(fetchFunctions.getFirstName(data));
        console.log(fetchFunctions.getFirstNameAll(data));
    }
};

export default fetchFunctions;
