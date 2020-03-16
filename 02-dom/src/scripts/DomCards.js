import functions from './domFunc.js';

let counter = 0; //set counter outside of event listener 
// so it doesnt reset on each click

WWC.addEventListener('click', function (event) {
    console.log(event.target);

    if (event.target.nodeName === 'BUTTON') {
        console.log("button click");
        if (event.target.textContent === 'Before') {
            functions.addBefore(event.target.parentElement, "New Stuff " + counter++);
            // console.log("The counter is at: " + counter);
        } else if (event.target.textContent === 'After') {
            functions.addAfter(event.target.parentElement, "New Stuff " + counter++);
        } else if (event.target.textContent === 'Delete') {
            functions.deleteDiv(event.target.parentElement);
        }
    };
});

// document.body.addEventListener('click', function(event) {
//    console.log("registered a click");
// });


// idNumber.addEventListener('change', (() => {
//     idNumberSize.textContent = functions.size(idNumber.value);
// showArr.addEventListener('click', function () {
//     messageArea.innerHTML = arrayFunctions.showArray(myArray, Number(arrayInput.value));
// });

// sumArr.addEventListener('click', function () {
//     messageArea.innerHTML = arrayFunctions.totalArray(myArray, Number(arrayInput.value));
// });
