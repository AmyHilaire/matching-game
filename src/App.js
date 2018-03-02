import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Stimulus picture="Y"/>
        <Responses/>
      </div>
    );
  }
}

class Stimulus extends Component {
  render() {
    return (
      <div className="Stimulus">
        <h1>{this.props.picture}</h1>
      </div>
    );
  }
}

class Response extends Component {
  render() {
    return (
      <span className="Response">
        <h2>{this.props.picture}</h2>
      </span>
    );
  }
}

class Responses extends Component {
  render() {
    return (
      <div className="Responses">
        <Response picture="X"/>
        <Response picture="Y"/>
        <Response picture="Z"/>
      </div>
    );
  }
}
export default App;
