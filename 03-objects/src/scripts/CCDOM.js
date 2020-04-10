const domFuncs = {

    buildDomCards(text) {
        const div = document.createElement('div');
        div.setAttribute('id', text.name);
        div.setAttribute('class', 'domBox'); //applying premade css to new divs

        const cityName = document.createElement("h2");
        cityName.textContent = text.name
        div.appendChild(cityName);

        const latitudeDisplay = document.createElement("span");
        latitudeDisplay.textContent = `Latitude: ${text.latitude} `;
        div.appendChild(latitudeDisplay);

        const longitudeDisplay = document.createElement("span");
        longitudeDisplay.textContent = `Longitude: ${text.longitude}`;
        div.appendChild(longitudeDisplay);

        const contentBreak = document.createElement("br");
        div.appendChild(contentBreak);

        const hemisphereDisplay = document.createElement("p");
        hemisphereDisplay.setAttribute("id", `${text.name}hemisphereDisplayID`)
        div.appendChild(hemisphereDisplay);

        const populationDisplay = document.createElement("span");
        populationDisplay.setAttribute("id", `span${text.name}`)
        populationDisplay.textContent = `Population: ${text.population} `;
        div.appendChild(populationDisplay);

        const citySize = document.createElement("span");
        citySize.setAttribute("id", `${text.name}citySizeID`)
        div.appendChild(citySize);

        const contentBreak2 = document.createElement("br");
        div.appendChild(contentBreak2);

        const populationInput = document.createElement("input");
        populationInput.setAttribute("id", `${text.name}updatedPopulationID`)
        div.appendChild(populationInput);

        const contentBreak3 = document.createElement("br");
        div.appendChild(contentBreak3);

        const add = document.createElement('button');
        add.appendChild(document.createTextNode("Moved In"));
        add.setAttribute("id", "addPopID");
        div.appendChild(add);

        const leave = document.createElement('button');
        leave.appendChild(document.createTextNode("Moved out"));
        leave.setAttribute("id", "lessPopID");
        div.appendChild(leave);

        const contentBreak4 = document.createElement("br");
        div.appendChild(contentBreak4);

        const delBut = document.createElement('button');
        delBut.appendChild(document.createTextNode("Remove City"));
        delBut.setAttribute("id", "deleteCityID");
        div.appendChild(delBut);

        return div;
    },

    addBefore(node, text) {
        const div = domFuncs.buildDomCards(text);
        node.parentElement.insertBefore(div, node);
    },

    deleteDiv(node) {
        node.remove();
    },
};

export default domFuncs;