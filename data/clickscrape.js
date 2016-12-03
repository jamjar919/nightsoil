var twitterAPI = require('node-twitter-api');
var twitterkey = require("./twitterkey.json");
var twitter = new twitterAPI(twitterkey);
var fs = require('fs');
accessToken = twitterkey.accessToken;
accessTokenSecret = twitterkey.accessSecret;
screenName = "TheOnion"
twitter.verifyCredentials(accessToken, accessTokenSecret, {}, function(error, data, response) {
    if (error) {
        console.log("error");
    } else {
        console.log("credentials good");
    }
});
twitter.getTimeline("user",{
        "screen_name": screenName,
        "count": 500
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
        fs.writeFile(screenName+'.json', JSON.stringify(tweets), function (err) {
            if (err) return console.log(err);
            console.log('Wrote file, '+tweets.length+" tweets");
        });
    }
);