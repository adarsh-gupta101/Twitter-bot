const express = require("express");
const TWITTER = require("twit");
const dotenv = require("dotenv");
dotenv.config();

const app = express();
var id = [];
let i = 1;
const T = new TWITTER({
  consumer_key: process.env.APIKEY,

  consumer_secret: process.env.APISECRETKEY,

  access_token: process.env.AccessToken,

  access_token_secret: process.env.AccessTokenSECRET,
});
/*  */
var stream = T.stream("statuses/filter", { track: "dogecoin" });
var stream2 = T.stream("statuses/filter", { track: "bitcoin" });

stream2.on("tweet", function (tweet) {
  T.post("statuses/retweet/:id", { id: tweet.id_str }, () => {
    console.log("kl");
  });
  T.post("favorites/create/:id", { id: tweet.id_str }, () => {
    console.log("k");
  });
});

stream.on("tweet", function (tweet) {
  T.post("statuses/retweet/:id", { id: tweet.id_str }, () => {
    console.log("mmmmm");
  });
  T.post("favorites/create/:id", { id: tweet.id_str }, () => {
    console.log("kkk");
  });
});

app.listen(process.env.PORT || 3000, () => {
  console.log("server is running for user");
});
