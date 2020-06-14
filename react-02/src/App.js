import React from 'react';
import SVGicons from './components/SVGIcons/SVGicons';
import './App.css';
import MainPage from './components/MainPage';
import Game from './components/TicTacToe';
import AccountsUI from './components/AccountApp/AccountsApp';
import CitiesUI from './components/CitiesAndCommunities/CitiesAndCommunitiesApp';
import LinkedListApp from './components/LinkedLists/LinkedListApp'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      imageclick: 0,

    };
  }

  handleClick = (number) => {
    this.setState({
      imageclick: number
    });
  }

  render() {
    return (
      <div className="App">
        <SVGicons handleClick={this.handleClick}/>
        {this.state.imageclick === 0 && <MainPage />}
        {this.state.imageclick === 1 && <Game />}
        {this.state.imageclick === 2 && <AccountsUI />}
        {this.state.imageclick === 3 && <CitiesUI />}
        {this.state.imageclick === 4 && <LinkedListApp />}

      </div>
    );
  }
}

export default App;
