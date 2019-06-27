import React, { Component } from 'react';
import words from '../DisplayWord/words';
import './App.css';
import DisplayWord from '../DisplayWord/DisplayWord';
import WrongLetters from '../WrongLetters/WrongLetters';
import SubmitGuess from '../SubmitGuess/SubmitGuess';

class App extends Component {
  state = {
    word: words[Math.floor(Math.random() * words.length)],
    guessedLetters: [],
    guessesRemaining: 6
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
  updateGuessesRemaining(letter) {
    if(!this.state.guessedLetters.includes(letter) && !this.state.word.split(' ').includes(letter)) {
      this.setState({ guessesRemaining: this.state.guessesRemaining -1 })
      }
    }
  gameOver() {
    if (this.state.guessesRemaining <= 0) {
      alert('You lost')
    } else if (this.wordIsGuessed()) {
      alert(`You totally Won and guessed the word ${this.state.word}`)
    }
  }

  render() {
    return (
    <>
    <div className="App">
      <header className="App-header">
        <h1>Guess the plant game!</h1>
        <h2>THEME: PLANTS</h2>
        <p>
        <DisplayWord word={this.state.word} guessedLetters={this.state.guessedLetters} />
        </p>
        <SubmitGuess updateGuessLetters={this.updateGuessLetters} />
        <h3>Letters not in the word:</h3>
        <p className="Letters">
        <WrongLetters word={this.state.word} guessedLetters={this.state.guessedLetters} />
        </p>
      </header>
    </div>
    </>
    )
  }
}

export default App;


