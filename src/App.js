import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
        <h1>Reedham Pujara</h1>
          <img src={logo} className="App-logo" alt="logo" />
            <p>
          Something amazing coming Soon
        </p>
        untill then visit my 
        <a
          className="App-link"
          href="https://github.com/Reedham20"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub profile
        </a>
        </header>
      </div>
    );
  }
}

export default App;