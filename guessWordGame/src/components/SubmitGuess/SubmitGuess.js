import React, { Component } from 'react';
import './SubmitGuess.css';

class SubmitGuess extends Component {
  handleSubmit= (event) =>{
    event.preventDefault()
    const letter = this.refs.textInput.value 
    this.props.updateGuessLetters(letter)
    this.refs.textInput.value = ''
  }

  render() {
    return (
    <div className="SubmitGuess">
      <form onSubmit={this.handleSubmit}>
        <input type="text" ref="textInput" maxLength='1'/>
        <button>Guess a letter</button>
      </form>
    </div>
    )
  }
}

export default SubmitGuess;


