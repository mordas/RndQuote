import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Quote from './quote/quote.js'
import NewQuoteBtn from './new-quote/new-quote.js'
class App extends Component {
  render() {
    return (
      <div className="App" id="quote-box">
              <h1>Random Quote Machine for fcc</h1>
              <Quote />
              <NewQuoteBtn />
                              <button id="tweet-quote"></button>
      </div>
    );
  }
}

export default App;
