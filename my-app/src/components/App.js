import React, { Component } from 'react';
import logo from '../logo.svg';
import '../App.css';
import '../css/main.css';
import HomeComponent from "./layout/HomeComponent";



class App extends Component {
  render() {
    return (
      <div className="app">
        <HomeComponent />
      </div>
    );
  }
}

export default App;
