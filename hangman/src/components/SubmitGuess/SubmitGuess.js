import React, { Component } from 'react';
import './SubmitGuess.css';

class SubmitGuess extends Component {
  render() {
    return (
    <div className="SubmitGuess">
      <form>
        <input type="text" maxLength='1'/>
        <button>Submit</button>
      </form>
    </div>
    )
  }
}

export default SubmitGuess;


