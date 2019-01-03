import React from 'react';
import Quote from '.././quote/quote.js'
const NewQuoteBtn = function (){

return (
<button id="new-quote" onClick={Quote.newQuote}>Random Quote</button>
)
};

export default NewQuoteBtn;
