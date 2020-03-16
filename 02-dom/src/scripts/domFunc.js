const functions = {

    buildDomCards(text) {
        const div = document.createElement('div');
        div.setAttribute('class', 'clCard'); //applying premade css to new divs
        
            
        div.appendChild(document.createTextNode(text));


        const add = document.createElement('button');
        add.appendChild(document.createTextNode("After"));
        div.appendChild(add);

        const before = document.createElement('button');
        before.appendChild(document.createTextNode("Before"));
        div.appendChild(before);

        const delBut = document.createElement('button');
        delBut.appendChild(document.createTextNode("Delete"));
        div.appendChild(delBut);

        return div;
    },

    addBefore(node, text) {
        const div = functions.buildDomCards(text);
        node.parentElement.insertBefore(div, node);
    },

    addAfter(node, text) {
        const div = functions.buildDomCards(text);
        // console.log("Parent innerText: " + node.parentElement.innerText); trial and error
        // console.log("Sibling innerText: " + node.nextElementSibling.innerText); trial and error
        // node.nextElementSibling.parentElement.appendChild(div, node); trial and still just errors
        node.parentElement.insertBefore(div, node.nextElementSibling);
    },

    deleteDiv(node) {
        node.remove();
    }

};


export default functions;