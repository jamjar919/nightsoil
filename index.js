var mark = require('markovify.js');
var rshi = require('./data/rshitpost.json');

var reddit_goods = [];

for (i in rshi.data.children){
	reddit_goods.push(rshi.data.children[i].data.title);
}

var c = new mark.Chain(reddit_goods);
var x = mark.markov(c);
console.log(x);
