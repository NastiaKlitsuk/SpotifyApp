var express = require("express");
var router = express.Router();

router.get("/token", (req, res, next) => {
  const client_id = "4caa4963a0b047cf8d58105015bf4e41";
  const client_secret = "a14e5b7f899141c3952be01023bea6f3";
  var request = require("request");

  const authOptions = {
    url: "https://accounts.spotify.com/api/token",
    headers: {
      Authorization:
        "Basic " +
        Buffer.from(client_id + ":" + client_secret).toString("base64"),
    },
    form: {
      grant_type: "client_credentials",
    },
    json: true,
  };

  request.post(authOptions, (error, response, body) => {
    if (!error && response.statusCode === 200) {
      res.send(body.access_token);
    }
  });
});

router.get("/albums/:artistName", (req, res, next) => {
  res.send("respond with a resource");
});

module.exports = router;
