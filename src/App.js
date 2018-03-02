import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Stimulus picture="Y"/>
        <Responses pictures={["X", "Y", "Z", "A"]}/>
      </div>
    );
  }
}

class Stimulus extends Component {
  render() {
    return (
      <div className="Stimulus">
        {this.props.picture}
      </div>
    );
  }
}

class Response extends Component {
  checkAnswer() {
    alert("You Win!!");
  }
  render() {
    return (
      <span className="Response" onClick={this.checkAnswer}>
        {this.props.picture}
      </span>
    );
  }
}

class Responses extends Component {
  render() {
    return (
      <div className="Responses">
        {this.props.pictures.map(function(picture){
          return <Response picture={picture}/>
        })}
      </div>
    );
  }
}
export default App;
