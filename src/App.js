import React, { Component } from 'react';
import './App.css';

class App extends Component {
  answers() {
    return ([
    {value: "X", correct: false},
    {value: "Y", correct: true},
    {value: "Z", correct: false},
    {value: "A", correct: false}
  ]);
  }


  render() {
    return (
      <div className="App">
        <Stimulus picture="Y"/>
        <Responses pictures={this.answers()}/>
        <Score score="0"/>
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
  checkAnswer = () => {
    if (this.props.correct){
      alert("You Win!!");
    }
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
          return <Response picture={picture.value} correct={picture.correct}/>
        })}
      </div>
    );
  }
}

  class Score extends Component {
    render() {
      return (
        <div className="Score">
          <p>Score = {this.props.score}</p>
        </div>
      )
    }
  }

export default App;
