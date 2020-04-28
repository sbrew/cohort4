import React from 'react';
import SVGicons from './components/SVGicons';
import './App.css';
import MainPage from './components/MainPage';
import Game from './components/TicTacToe';

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

      </div>
    );
  }
}

export default App;
