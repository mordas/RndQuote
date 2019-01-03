import React, {Component} from 'react';

export default class Quote extends Component {
constructor(props){
super(props);
this.state = { 
index : 0
 };

this.newQuote = this.newQuote.bind(this);
};
newQuote () {
this.setState ({
index: Math.floor(Math.random() * this.quotes.length)
});
};

render() {
const quotes = [
{
quote: 'Первая цитата',
autor:'автор первой цитаты',
active: true},
{quote: 'Вторая цитата',
autor: 'автор второй цитаты',
active: false
},
{
quote: "третья цитата",
autor: "третий автор"
}
];
return (
<div>
<h1 id="text">{quotes[this.state.index].quote}</h1>
<h3 id="autor">{quotes[this.state.index].autor}</h3>
</div>
)
}
}
