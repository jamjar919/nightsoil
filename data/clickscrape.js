var twitterAPI = require('node-twitter-api');
var twitterkey = require("./twitterkey.json");
var twitter = new twitterAPI(twitterkey);
var fs = require('fs');
accessToken = twitterkey.accessToken;
accessTokenSecret = twitterkey.accessSecret;
twitter.verifyCredentials(accessToken, accessTokenSecret, {}, function(error, data, response) {
    if (error) {
        console.log("error");
    } else {
        console.log("credentials good");
    }
});
twitter.getTimeline("user",{
        "screen_name": "clickhole",
        "count": 200
    },
    accessToken,
    accessTokenSecret,
    function(error,data,response) {
        if (error) {
            console.log(error);
        }
        var tweets = [];
        for (var i = 0; i< data.length; i++) {
            tweets.push(data[i]["text"].replace(/https:\/\/t.co\/[a-zA-Z0-9]*/g,"").trim());
        }
        fs.writeFile('clickhole.json', JSON.stringify(tweets), function (err) {
            if (err) return console.log(err);
            console.log('Wrote file');
        });
    }
);