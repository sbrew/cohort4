global.fetch = require('node-fetch');

import fetchFunctions from './functions';

const url = 'http://127.0.0.1:5000/';

test('test that the fetch works?', async () => {

    const clients = [
        {key:1, name:"Steve"},
        {key:2, name:"Mia"}
    ]

    // Check that the server is running and clear any data
    let data = await fetchFunctions.postData(url + 'clear');

    data = await fetchFunctions.postData(url + 'all');
    expect(data.status).toEqual(200);
    expect(data.length).toBe(0);

    data = await fetchFunctions.postData(url + 'add', clients[0]);
    expect(data.status).toEqual(200);

    data = await fetchFunctions.postData(url + 'all');
    expect(data.status).toEqual(200);
    expect(data.length).toBe(1);
    expect(data[0].name).toBe("Steve");

    // // add a second with the same key which should be an error
    data = await fetchFunctions.postData(url + 'add', clients[0]);
    expect(data.status).toEqual(400);

    // // add a second which should be ok
    data = await fetchFunctions.postData(url + 'add', clients[1]);
    expect(data.status).toEqual(200);

    data = await fetchFunctions.postData(url + 'all');
    expect(data.status).toEqual(200);
    expect(data.length).toBe(2);
    expect(data[1].name).toBe("Mia");

    data = await fetchFunctions.postData(url + 'read', {key:1});
    expect(data.status).toEqual(200);
    expect(data.length).toBe(1);
    expect(data[0].name).toBe("Steve");

    data = await fetchFunctions.postData(url + 'update', {key:1, name:"the gary"});
    expect(data.status).toEqual(200);

    data = await fetchFunctions.postData(url + 'read', {key:1});
    expect(data.status).toEqual(200);
    expect(data.length).toBe(1);
    expect(data[0].name).toBe("the gary");

    data = await fetchFunctions.postData(url + 'delete', {key:1});
    expect(data.status).toEqual(200);

    data = await fetchFunctions.postData(url + 'read', {key:1});
    expect(data.status).toEqual(400);
});