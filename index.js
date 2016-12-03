var mark = require('markovify.js');
var rshi = require('./data/rshitpost.json');
var four = require('./data/s4s.json');

var messages = []

// for (i in rshi.data.children){
// 	messages.push(rshi.data.children[i].data.title);
// }
for (i in four.k){
	messages.push(four.k[i]);
}


var c = new mark.Chain(messages);
var x = mark.markov(c);
console.log(x);
