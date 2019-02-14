import React, { Component } from 'react';
import './App.css';
import {MainBoard} from './components/MainBoard/MainBoard';

class App extends Component {
  render() {
    return (
      <div className="App">
        <MainBoard />
      </div>
    );
  }
}

export default App;
