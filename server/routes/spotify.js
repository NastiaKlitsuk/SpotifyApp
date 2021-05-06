const express = require("express");
const router = express.Router();
const request = require("request");

router.get("/albums", (req, res, next) => {
  const authOptions = getAuthOptions();
  console.log(JSON.stringify(authOptions));

  request.post(authOptions, (error, response, body) => {
    if (!error && response.statusCode === 200) {
      const clientResponce = res;

      console.log(body.access_token);
      const artist = req.params.artistName;
      const token = body.access_token;
      const options = {
        url: `https://api.spotify.com/v1/search?q=${artist}&type=album`,
        headers: {
          Authorization: "Bearer " + token,
        },
        json: true,
      };

      request.get(options, (error, response, body) => {
        console.log("nastia1");
        console.log(JSON.stringify(body));
        clientResponce.send(body);
      });
    }
  });
});

function getAuthOptions() {
  const client_id = "4caa4963a0b047cf8d58105015bf4e41";
  const client_secret = "a14e5b7f899141c3952be01023bea6f3";

  return {
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
}

module.exports = router;
