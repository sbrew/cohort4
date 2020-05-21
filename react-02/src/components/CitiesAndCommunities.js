import React from 'react';
import CCController from './CCController'
import CityDisplayComp from './CityDisplayComp'
import './Display.css';

class CitiesUI extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            cityName: "",
            latitude: "",
            longitude: "",
            population: "",
            region: "",
            size: "",
            comCtrler: new CCController(),
            populationChange: 0,
            totalPopulation: 0,
            mostNorthern: "",
            mostSouthern: ""
        }
    }

    handleNameChange = (e) => {
        this.setState({ cityName: e.target.value })
    }

    handleLatitudeChange = (e) => {
        this.setState({ latitude: e.target.value })
    }

    handleLongitudeChange = (e) => {
        this.setState({ longitude: e.target.value })
    }

    handleInitialPopulation = (e) => {
        this.setState({ population: e.target.value })
    }

    handlePopulationChange = (populationChange) => {
        this.setState({ populationChange })
    }

    createCityClick = () => {
        this.state.comCtrler.createCity(this.state.cityName, this.state.latitude, this.state.longitude, this.state.population)
        this.clearFields();
    }

    clearFields = () => {
        this.setState({ cityName: "" });
        this.setState({ population: "" });
        this.setState({ latitude: "" });
        this.setState({ longitude: "" });
    }

    async componentDidMount() {
        await this.state.comCtrler.updateCities();
        this.setState({ comCtrler: this.state.comCtrler })
    }

    deletingCities = (props) => {
        this.state.comCtrler.deleteCity(props.name, props.key)
        this.setState({ comCtrler: this.state.comCtrler })
    }

    handleImmigration = (props) => {
        this.state.comCtrler.increasePopulation(props.name, this.state.populationChange)
        this.setState({ comCtrler: this.state.comCtrler })
    }

    handleEmigration = (props) => {
        this.state.comCtrler.decreasePopulation(props.name, this.state.populationChange)
        this.setState({ comCtrler: this.state.comCtrler })
    }

    updateServerData = (props) => {
        this.state.comCtrler.updatePopulation(props.name, props.key)
    }

    cityHemisphere = (props) => {
        return this.state.comCtrler.whichSphere(props.name)
    }

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
                hemisphere={this.cityHemisphere}
                key={city.key}
                city={city}
                onPopulationChange={this.handlePopulationChange}
                popChange={this.state.populationChange} />
        })




        return (
            <div id="citiesCommunitiesID">
                <div id="newCommunityID">
                    <h1>Cities and Communities</h1>
        City Name <input  value={this.state.cityName} onChange={this.handleNameChange} type="text" /><br />
        Latitude <input  value={this.state.latitude} onChange={this.handleLatitudeChange} type="text" /><br />
        Longitude <input  value={this.state.longitude} onChange={this.handleLongitudeChange} type="text" /><br />
        Most recent Census <input  value={this.state.population} onChange={this.handleInitialPopulation} type="text" /><br />
                    <button onClick={this.createCityClick}>Input City Data</button><br /><br />
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
