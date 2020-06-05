import React from 'react';
import cityStuff from './CCController'
import CityDisplayComp from './CityDisplayComp'
import './Display.css';

class CitiesUI extends React.Component {
    constructor() {
        super();
        this.cityName = React.createRef();
        this.latitude = React.createRef();
        this.longitude = React.createRef();
        this.population = React.createRef();
        this.state = {
            comCtrler: new cityStuff.Community(),
            message: "",
            region: "",
            size: "",
            populationChange: 0,
            totalPopulation: 0,
            mostNorthern: "",
            mostSouthern: ""
        }
    }

    // handleNameChange = (e) => {
    //     this.setState({ cityName: e.target.value })
    // }

    // handleLatitudeChange = (e) => {
    //     this.setState({ latitude: e.target.value })
    // }

    // handleLongitudeChange = (e) => {
    //     this.setState({ longitude: e.target.value })
    // }

    // handleInitialPopulation = (e) => {
    //     this.setState({ population: e.target.value })
    // }

    handlePopulationChange = (populationChange) => {
        this.setState({ populationChange })
    }

    createCityClick = async () => {
        let msg = await this.state.comCtrler.createCity(this.cityName.current.value, this.latitude.current.value, this.longitude.current.value, this.population.current.value)
        if (msg) {
            this.setState({ message: msg })
        } else {
            this.setState({ comCtrler: this.state.comCtrler })
            this.clearFields();
            this.setState({ message: "" })
        }
        // console.log("%%%%%%finished create city click%%%%%%")
    }

    createRandomCityClick = async () => {
        await this.state.comCtrler.generateRandomCity();
        this.setState({ comCtrler: this.state.comCtrler })
    }

    clearFields = () => {
        this.cityName.current.value = "";
        this.population.current.value = "";
        this.latitude.current.value = "";
        this.longitude.current.value = "";
    }

    async componentDidMount() {
        await this.state.comCtrler.updateCities();
        this.setState({ comCtrler: this.state.comCtrler });
    }

    deletingCities = (city) => {
        this.state.comCtrler.deleteCity(city.name, city.key)
        this.setState({ comCtrler: this.state.comCtrler })
    }

    handleImmigration = (city) => {
        this.state.comCtrler.increasePopulation(city.name, this.state.populationChange)
        this.setState({ comCtrler: this.state.comCtrler })
    }

    handleEmigration = (city) => {
        this.state.comCtrler.decreasePopulation(city.name, this.state.populationChange)
        this.setState({ comCtrler: this.state.comCtrler })
    }

    updateServerData = (city) => {
        this.state.comCtrler.updatePopulation(city.name, city.key)
    }

    // cityHemisphere = (city) => {
    //     return this.state.comCtrler.whichSphere(city.name)
    // }

    render() {
        const mostNorthern = this.state.comCtrler.getMostNorthern();
        const mostSouthern = this.state.comCtrler.getMostSouthern();
        const totalPopulation = this.state.comCtrler.getPopulation();

        const cards = this.state.comCtrler.cityList.map(city => {
            return <CityDisplayComp
                delFunc={this.deletingCities}
                popIncrease={this.handleImmigration}
                popDecrease={this.handleEmigration}
                updateServers={this.updateServerData}
                hemisphere={this.state.comCtrler.whichSphere(city.name)}
                key={city.key}
                city={city}
                onPopulationChange={this.handlePopulationChange}
                popChange={this.state.populationChange} />
        });

        return (
            <div id="citiesCommunitiesID">
                <div id="newCommunityID">
                    <h1>Cities and Communities</h1>
        City Name <input defaultValue="" id="idCityName" ref={this.cityName} type="text" /><br />
        Latitude <input defaultValue="" id="idLatitude" ref={this.latitude} type="text" /><br />
        Longitude <input defaultValue="" id="idLongitude" ref={this.longitude} type="text" /><br />
        Most recent Census <input defaultValue="" id="idPopulation" ref={this.population} type="text" /><br />
                    <button onClick={this.createCityClick}>Input City Data</button><br />
                    <button onClick={this.createRandomCityClick}>Random City Data</button><br />
                    {this.state.message}<br />
                </div>
                <div id="displayCommunitiesID" className="grid">
                    {cards}<br />
                </div>
                <div id="randomDetails">
                    <h2>The farthest City to the North is {mostNorthern}</h2>
                    <h2>The farthest City to the South is {mostSouthern}</h2>
                    <h2>Total population is {totalPopulation} </h2>
                </div>
            </div>
        );
    }
}

export default CitiesUI;
