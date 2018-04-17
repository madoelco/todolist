import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ListComponent from './components/list'
import InputComponent from './components/input'



class App extends Component {

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">ToDo List</h1>
        </header>
        <p className="App-intro">
          Use this great application to organize your activities
        </p>
        <InputComponent />
        <br/>
        <ListComponent />
      </div>
    );
  }
}

export default App;
