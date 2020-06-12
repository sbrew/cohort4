import React from 'react';
import '../Display.css';

class CityDisplayComp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            popChange: props.popChange,
            city: props.city
        }
    }

    handlePopulationChange = (e) => {
        this.props.onPopulationChange(Number(e.target.value))
    }

    destroyingCities = () => {
        this.props.delFunc(this.state.city)
    }

    handleImmigration = () => {
        this.props.popIncrease(this.state.city, this.state.popChange)
        this.props.updateServers(this.state.city)
    }

    handleEmigration = () => {
        this.props.popDecrease(this.state.city, this.state.popChange)
        this.props.updateServers(this.state.city)
    }

    render() {
        return (
            <div id="updateCommunity" className="accountCards">
                <h2>{this.state.city.name}</h2>
                <span>Latitude: {this.state.city.latitude}</span> <span>Longitude: {this.state.city.longitude}</span>
                <p>{this.props.hemisphere}</p>
                <span>Population: {this.state.city.population} {this.state.city.howBig()}  </span><br />
                <input type="number" onChange={this.handlePopulationChange} /><br />
                <button id="iDMovingIn" onClick={this.handleImmigration} >Moving In</button>
                <button id="iDMovingOut" onClick={this.handleEmigration} >Moving Out</button><br />
                <button id="iDRemoveCity" onClick={this.destroyingCities} >Remove City</button>
            </div>
        );
    }
}

export default CityDisplayComp;