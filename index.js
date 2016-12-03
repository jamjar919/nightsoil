var mark = require('markovify.js');
var rshi = require('./data/rshitpost.json');
var emoj = require('./data/emojip.json');
var book = require('./data/book.json');
var cs4s = require('./data/s4s.json');
var cslb = require('./data/b.json');
var cslg = require('./data/g.json');
var cpol = require('./data/pol.json');
var clickhole = require('./data/clickhole.json');

var strings = require('locutus/php/strings/')
var messages = []
function reddit_add(x){
	var k;
	for (i in x.data.children){
		k.push(x.data.children[i].data.title);
	}
	return k;
}

//messages.push.apply(messages,cpol);
//messages.push.apply(messages,cs4s);
//messages.push.apply(messages,cslb);
//messages.push.apply(messages,cslg);
messages.push.apply(messages,clickhole);

var c = new mark.Chain(messages);

// console.log(c);

// console.log(strings.html_entity_decode(x));
function printGold(){
	console.log("----");
	var x = mark.markov(c);
	console.log(strings.html_entity_decode(x));
}
setInterval(printGold, 1000);