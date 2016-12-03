var mark = require('markovify.js');
var rshi = require('./data/rshitpost.json');
var four = require('./data/s4s.json');
var strings = require('locutus/php/strings/')
var messages = []

var c = new mark.Chain(four);
var x = mark.markov(c);
console.log(strings.html_entity_decode(x));
