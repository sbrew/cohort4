let myList = document.querySelector('ol');
// div event listener
domBox.addEventListener('click', function (event) {
    console.log(event.target);
});

// can also be written like 
// domBox.addEventListener('click', ((event) => {
//     console.log(event.target);
// }));


function inputLength() {
    return inField.value.length;
};

// function createListElement(){
//     let newItem = document.createElement('li');
//     newItem.appendChild(document.createTextNode(inField.value));
// };

show.addEventListener('click', (() => {
    console.log(myList.children);
}));

add.addEventListener('click', function () {
    if (inputLength() > 0) {
        let newItem = document.createElement('li');
        newItem.appendChild(document.createTextNode(inField.value));
        myList.appendChild(newItem);
        inField.value = "";
    }
});

listTop.addEventListener('click', function () {
    if (inputLength() > 0) {
        let newItem = document.createElement('li');
        newItem.appendChild(document.createTextNode(inField.value));
        myList.insertBefore(newItem, myList.childNodes[0]);
        inField.value = "";
    }
});

