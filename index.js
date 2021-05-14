const express = require("express");
const TWITTER = require("twit");
const dotenv = require("dotenv");
dotenv.config();

const app = express();
var id = [];
const T = new TWITTER({
  consumer_key: process.env.APIKEY,

  consumer_secret: process.env.APISECRETKEY,

  access_token: process.env.AccessToken,

  access_token_secret: process.env.AccessTokenSECRET,
});
/*  */
var stream = T.stream("statuses/filter", { track: "doge" });
stream.on("tweet", function (tweet) {
  T.post("statuses/retweet/:id", { id: tweet.id_str }, () => {
    console.log("22");
  });
  T.post("favorites/create", { id: tweet.id_str }, () => {
    console.log(21);
  });
  24;
});

const retweet = (alue, index, array) => {
  T.post(
    "statuses/retweet/:id",
    {
      id: String(alue),
    },
    function (err, data, response) {
      console.log(alue.toString());
      if (err) {
        console.log(err);
      }
    }
  );
};
/* T.post(
    "statuses/retweet/:id",
    { id: "343360866131001345" },
    function (err, data, response) {
      console.log(data);
    }
  );
}; */
app.listen(process.env.PORT || 3000, () => {
  console.log("server is running for user");
});
