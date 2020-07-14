import functions from './domFunc.js';

let counter = 5; //set counter outside of event listener 
// so it doesnt reset on each click

WWC.addEventListener('click', function (event) {
    console.log(event.target);

    if (event.target.nodeName === 'BUTTON') {
        console.log("button click");
        if (event.target.textContent === 'Before') {
            functions.addBefore(event.target.parentElement, "Stuff " + counter++);
            // console.log("The counter is at: " + counter);
        } else if (event.target.textContent === 'After') {
            functions.addAfter(event.target.parentElement, "Stuff " + counter++);
        } else if (event.target.textContent === 'Delete') {
            functions.deleteDiv(event.target.parentElement);
        }
    };
});

