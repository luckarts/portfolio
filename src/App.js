import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Button } from 'components/shared';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Button
          large
          textPrimary
          type="button"
          className="inline-flex items-center rounded-full FadeSize animationD-2s"
        >
          <span>Balayer</span>
        </Button>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
