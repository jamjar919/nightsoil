fs = require('fs')
fs.readFile('data/rshitpost.json', 'utf8', function (err,data) {
    if (err) {
        return console.log(err);
    }
    doRedditData(JSON.parse(data))
});

function doRedditData(data) {
    data = data["data"]["children"];
    sentences = [];
    for (var i =0; i < data.length; i++) {
        sentences.push(data[i]["data"]["title"]);
    }
    console.log(sentences);
}