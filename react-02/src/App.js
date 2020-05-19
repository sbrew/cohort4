import React from 'react';
import SVGicons from './components/SVGicons';
import './App.css';
import MainPage from './components/MainPage';
import Game from './components/TicTacToe';
import AccountsUI from './components/Accounts';
import CitiesUI from './components/CitiesAndCommunities';

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

      </div>
    );
  }
}

export default App;
