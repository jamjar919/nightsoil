var mark = require('markovify.js');

var test = [
    "I am not a free man! I am a number!",
    "Free the slaves",
    "I am a number of things",
];

var c = new mark.Chain(test);
var x = mark.markov(c);
console.log(x);