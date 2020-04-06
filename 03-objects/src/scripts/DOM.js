const functions = {

    buildDomCards(node, text) {
        const div = document.createElement('div');
        div.setAttribute('class', 'clCard');//applying premade css to new divs
        div.setAttribute('id', text.accountName);
        div.appendChild(document.createTextNode(text.accountName));
        //creating a ptag for balance to easily update balances with deposits and withdraws
        let pTag = document.createElement('P');
        //using `ptag ${text.accountName}` to associate specifc ids while not creating conflict with other id tags
        pTag.setAttribute('id', `ptag ${text.accountName}`);
        pTag.appendChild(document.createTextNode(text.balance));
        div.appendChild(pTag);

        const delBut = document.createElement('button');
        delBut.appendChild(document.createTextNode("Close Account"));
        div.appendChild(delBut);
        node.parentElement.insertBefore(div, node);
        return div;
    },

    dropDownOptions(text) {
        const options = document.createElement('OPTION');
        options.setAttribute('id', text.accountName);
        options.appendChild(document.createTextNode(text.accountName));
        return options;
    },

    attachToDD(node, text) {
        const options = functions.dropDownOptions(text);
        console.log(node);
        node.appendChild(options, node);
    },

    deleteDiv(node) {
        node.remove();
    },
};

export default functions;