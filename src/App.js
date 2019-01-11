import React, { Component } from 'react';
import './App.css';
class App extends Component {
constructor(props){
super(props);
this.state = {
index: 1
};
this.newQuote = this.newQuote.bind(this);

};
newQuote = () => {
this.setState({
index: Math.floor(Math.random() * 6)
}
)
};
  render() {

const quotes = [
{
quote: 'I learned this, at least, by my experiment: that if one advances confidently in the direction of his dreams, and endeavors to live the life which he has imagined, he will meet with a success unexpected in common hours.',
author:'Henry David Thoreau',
},
{quote: 'Rather than love, than money, than fame, give me truth.',
author: 'Henry David Thoreau',
},
{
quote: "I went to the woods because I wished to live deliberately, to front only the essential facts of life, and see if I could not learn what it had to teach, and not, when I came to die, discover that I had not lived. I did not wish to live what was not life, living is so dear; nor did I wish to practise resignation, unless it was quite necessary. I wanted to live deep and suck out all the marrow of life, to live so sturdily and Spartan-like as to put to rout all that was not life, to cut a broad swath and shave close, to drive life into a corner, and reduce it to its lowest terms...",
author: "Henry David Thoreau"
},
{quote: 'Waste no more time arguing what a good man should be. Be One.',
author: 'Marcus Aurelius',
},

{quote: 'If a man knows not which port he sails, no wind is favorable.',
author: 'Seneca',
},

{quote: 'Don’t seek for everything to happen as you wish it would, but rather wish that everything happens as it actually will—then your life will flow well.',
author: 'Epictetus',
},


{quote: 'I begin to speak only when I’m certain what I’ll say isn’t better left unsaid.',
author: 'Cato',
},
];
    return (
      <div className="App" id="quote-box">
              <h1>Random Quote Machine for fcc</h1>
<div className="quote">
							<h1 id="text">{quotes[this.state.index].quote}</h1>
							<h3 id="author">{quotes[this.state.index].author}</h3>
</div>
							<button id = "new-quote" onClick={this.newQuote}
							type="button" className="btn btn-dark"
								>Random Quote</button>
              <a id="tweet-quote" href="twitter.com/intent/tweet" 
role="button" className="btn btn-primary">TWEET</a>
      </div>
    );
  }
}

export default App;
