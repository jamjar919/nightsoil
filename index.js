var mark = require('markovify.js');
var rshi = require('./data/rshitpost.json');
var s4s = require('./data/s4s.json');

var reddit_goods = [];

for (i in rshi.data.children){
	reddit_goods.push(rshi.data.children[i].data.title);
}

var c = new mark.Chain(s4s["data"]);
var x = mark.markov(c);
console.log(x);
