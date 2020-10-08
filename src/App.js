import React from 'react';
import { socket } from './services'
import { NavBar } from './components'
import logo from './logo.svg';
import './App.css';

class App extends React.Component {
  constructor(...args) {
    super(...args)

    socket.init();
  }

  render() {
    return (
      <div className="App">
        <NavBar/>
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    )
  }
}

export default App;
