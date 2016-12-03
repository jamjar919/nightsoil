var mark = require('markovify.js');
var rshi = require('./data/rshitpost.json');
var emoj = require('./data/emojip.json');
var e1 = require('./data/e1.json');
var e2 = require('./data/e2.json');
var e3 = require('./data/e3.json');
var book = require('./data/book.json');
var cs4s = require('./data/s4s.json');
var cslb = require('./data/b.json');
var cslg = require('./data/g.json');
var cpol = require('./data/pol.json');
var clickhole = require('./data/clickhole.json');
var onion = require('./data/TheOnion.json');
var http = require("http");

var strings = require('locutus/php/strings/')
//var messages = []
function reddit_add(x){
	var k = [];
	for (i in x.data.children){
		k.push(x.data.children[i].data.title);
	}
	return k;
}

//messages.push.apply(messages,cpol);
//messages.push.apply(messages,cs4s);
//messages.push.apply(messages,cslb);
//messages.push.apply(messages,cslg);
//messages.push.apply(messages,clickhole);
//messages.push.apply(messages,onion);

//var c = new mark.Chain(messages);

// console.log(c);

// console.log(strings.html_entity_decode(x));
/*function printGold(){
	console.log("----");
	var x = mark.markov(c);
	console.log(strings.html_entity_decode(x));
}
setInterval(printGold, 1000);
*/
var express = require("express");
var app = express();
app.get("/", function(req, res) {
    res.sendfile('public/index.html')
});
app.get("/gold", function(req, res) {
    res.header("Access-Control-Allow-Origin", "*");
    console.log(req["query"]);
    var messages = [];
    if (req["query"]["pol"] == "true") {
        messages.push.apply(messages,cpol);
    }
    if (req["query"]["s4s"] == "true") {
        messages.push.apply(messages,cs4s);
    }
    if (req["query"]["b"] == "true") {
        messages.push.apply(messages,cslb);
    }
    if (req["query"]["g"] == "true") {
        messages.push.apply(messages,cslg);
    }
    if (req["query"]["clickhole"] == "true") {
        messages.push.apply(messages,clickhole);
    }
    if (req["query"]["onion"] == "true") {
        messages.push.apply(messages,onion);
    }
    if (req["query"]["book"] == "true") {
        messages.push.apply(messages,reddit_add(book));
    }
    if (req["query"]["emoji"] == "true") {
        messages.push.apply(messages,reddit_add(emoj));
	messages.push.apply(messages,reddit_add(e1));
	messages.push.apply(messages,reddit_add(e2));
	messages.push.apply(messages,reddit_add(e3));
    }
    if (req["query"]["rshitpost"] == "true") {
        messages.push.apply(messages,reddit_add(rshi));
    }
    var c = new mark.Chain(messages);
    var x = mark.markov(c);
    var gem = strings.html_entity_decode(x);
    res.send(gem)
});
 var port = process.env.PORT || 3000;
 app.listen(port, function() {
   console.log("Listening on " + port);
 });
