import React from 'react';
import SVGicons from './components/SVGIcons/SVGicons';
import './App.css';
import MainPage from './components/MainPage';
import Game from './components/TicTacToe';
import AccountsUI from './components/AccountApp/AccountsApp';
import CitiesUI from './components/CitiesAndCommunities/CitiesAndCommunitiesApp';
import LinkedListApp from './components/LinkedLists/LinkedListApp'
import DataStructureApp from './components/FIFO&LIFO/Queue_StackApp'
import { ThemeContext, AppTheme, Stack, Queue } from './contexts/AppContext';
import Settings from './contexts/Settings';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.themeChange = () => {
      if (this.state.theme === AppTheme.light) {
        this.setState({ theme: AppTheme.dark })
      } else {
        this.setState({ theme: AppTheme.light })
      };
    }

    this.state = {
      imageclick: 0,
      themeChange: this.themeChange,
      theme: AppTheme.light,
      queue: Queue,
      stack: Stack, 
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
        <ThemeContext.Provider value={this.state}>
          <SVGicons handleClick={this.handleClick} />
          {this.state.imageclick === 0 && <MainPage />}
          {this.state.imageclick === 1 && <Game />}
          {this.state.imageclick === 2 && <AccountsUI />}
          {this.state.imageclick === 3 && <CitiesUI />}
          {this.state.imageclick === 4 && <LinkedListApp />}
          {this.state.imageclick === 5 && <DataStructureApp />}
          {this.state.imageclick === 6 && <Settings />}
        </ThemeContext.Provider>

      </div>
    );
  }
}

export default App;