import functions from './DOM'



test('does the DOM function work?', () => {
    const text = "Some text";
    const group = document.createElement('div');
    // const node = "lives here";
    console.log("We are in the tests");
    let element = functions.buildDomCards(group,text);
    expect(element).toBeTruthy();
});


// // test('does it Add to accounts?', () => {
// //     let group = document.createElement('div');
// //     let element = ooStuff.functions.buildDomCards('first insert');
// //     group.appendChild(element);
// //     expect(group.children.length).toBe(1);

// //     const txt = 'Account undefined'
// //     ooStuff.functions.addToAccounts(element, txt);
// //     expect(group.children.length).toBe(2);
// //     expect(group.children[0].textContent.substr(0, 17)).toBe(txt);
// //     expect(group.children[1].textContent.substr(0, 17)).toBe("Account undefined");

// // });