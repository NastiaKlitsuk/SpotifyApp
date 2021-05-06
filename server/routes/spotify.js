const express = require("express");
const router = express.Router();
const request = require("request");

router.get("/albums/:artistName", (req, res, next) => {
  const authOptions = getAuthOptions();
  request.post(authOptions, (error, response, body) => {
    if (!error && response.statusCode === 200) {
      const clientResponse = res;
      const artist = req.params.artistName;
      const query = Object.keys(req.query).reduce(
        (prev, current) => `${prev}&${current}=${req.query[current]}`,
        ""
      );
      const token = body.access_token;
      const url = `https://api.spotify.com/v1/search?query=${artist}&type=album${query}`;
      const options = {
        url,
        headers: {
          Authorization: "Bearer " + token,
        },
        json: true,
      };

      request.get(options, (error, response, body) => {
        clientResponse.send(body);
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
