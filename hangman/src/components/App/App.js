import React, { Component } from 'react';
import words from '../DisplayWord/words';
import './App.css';
import DisplayWord from '../DisplayWord/DisplayWord';
import WrongLetters from '../WrongLetters/WrongLetters';
import SubmitGuess from '../SubmitGuess/SubmitGuess';

class App extends Component {
  //randomly choose a word
  state = {
    word: words[Math.floor(Math.random() * words.length)],
    guessedLetters: []
  }
  updateGuessLetters = (letter) => {
    if(this.state.guessedLetters.includes(letter)){
      alert(`You already guessed ${letter}`)
    } else {
    this.setState({
      guessedLetters:[...this.state.guessedLetters, letter]
      })
    }
  }
  render() {
    return (
    <>
    <div className="App">
      <header className="App-header">
        <p>
          Welcome to Hangman!
        </p>
        {this.state.word}
        <DisplayWord word={this.state.word} guessedLetters={this.state.guessedLetters} />
        <WrongLetters word={this.state.word} guessedLetters={this.state.guessedLetters} />
        <SubmitGuess updateGuessLetters={this.updateGuessLetters} />
      </header>
    </div>
    </>
    )
  }
}

export default App;
// var word = words[Math.floor(Math.random() * words.length)];

//display correctly guessed letters with _
//display letters not yet guessed
//let user guess a letter
//check if letter is in the word
//update guess remaining
//repeat until game is over
//game over: word guessed or out of guesses


