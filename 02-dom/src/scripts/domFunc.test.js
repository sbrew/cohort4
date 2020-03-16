import functions from './domFunc';

const text = "Some text";

test('does the DOM function work?', () => {
    console.log("We are in the tests");
    const element = functions.buildDomCards(text);
    expect(element).toBeTruthy();
});

test('does it Add Before?', () => {
    const group = document.createElement('div');
    const element = functions.buildDomCards('First insert');
    group.appendChild(element);
    expect(group.children.length).toBe(1);

    const txt = 'New Element'
    functions.addBefore(element, txt);
    expect(group.children.length).toBe(2);
    expect(group.children[0].textContent.substr(0, 11)).toBe(txt);
    expect(group.children[1].textContent.substr(0, 12)).toBe("First insert");

});

test('does it Add After?', () => {
    const group = document.createElement('div');
    const element = functions.buildDomCards('First insert');
    group.appendChild(element);
    expect(group.children.length).toBe(1);

    const txt = 'New Element'
    functions.addAfter(element, txt);
    expect(group.children.length).toBe(2);
    expect(group.children[1].textContent.substr(0, 11)).toBe(txt);
    expect(group.children[0].textContent.substr(0, 12)).toBe("First insert");

});

test('does it delDiv?', () => {
    const group = document.createElement('div');
    const element = functions.buildDomCards('First insert');
    const element2 = functions.buildDomCards('Second insert');
    group.appendChild(element);
    expect(group.children.length).toBe(1);
    group.appendChild(element2);
    expect(group.children.length).toBe(2);

    functions.deleteDiv(element);
    expect(group.children.length).toBe(1);
    functions.deleteDiv(element2);
    expect(group.children.length).toBe(0);
// can try running tests to add several variables 
//to the js and delete specific ones afterwards

});

// test('does it add to the array', () => {
//     expect(arrayFunctions.addArray([1,2],3)).toStrictEqual([1,2,3]);
//     expect(arrayFunctions.addArray([45,67],89)).toStrictEqual([45,67,89]);
// });()

// test('Dom business.', () => {
//     document.body.innerHTML = `
//         <div id='whatever'>
            
//         </div>
//     `

//     let someDiv = document.getElementById('whatever');
    //And now we can use someDiv as our target for appending children to 'count' or what have you.
// })