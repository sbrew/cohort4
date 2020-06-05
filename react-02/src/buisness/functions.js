// const url = 'http://localhost:5000/';

async function postData(url = '', data = {}) {
    // Default options are marked with *

    // console.log('in the postdata~~~~~~~ before fetch');

    const response = await fetch(url, {
        method: 'POST',     // *GET, POST, PUT, DELETE, etc.
        mode: 'cors',       // no-cors, *cors, same-origin
        cache: 'no-cache',  // *default, no-cache, reload, force-cache, only-if-cached
        credentials: 'same-origin', // include, *same-origin, omit
        headers: {
            'Content-Type': 'application/json'
            // 'Content-Type': 'application/x-www-form-urlencoded',
        },
        redirect: 'follow',         // manual, *follow, error
        referrer: 'no-referrer',    // no-referrer, *client
        body: JSON.stringify(data)  // body data type must match "Content-Type" header
    });
    // console.log('in the postdata~~~~~~~ after fetch');
    const json = await response.json();    // parses JSON response into native JavaScript objects
    // console.log('in the postdata~~~~~~~ after json');
    json.status = response.status;
    json.statusText = response.statusText;

    return json;
    
}

export default { postData};