import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

const gMapsKey = require("./config/env.json").mapsApiKey;
const gMapsEndpoint = `https://maps.googleapis.com/maps/api/js?key=${gMapsKey}&callback=initMap&libraries=places`;

class App extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      testing: "test!"
    };
  }
  
  componentDidMount = () => {
    console.log("gMapsEndpoint: ", gMapsEndpoint);
  }
  
  render = () => {
    return (
      <div className="app">
          <p>Welcome to Relocation Station</p>
          <div id="map"></div>
      </div>
    );
  }
}

export default App;
