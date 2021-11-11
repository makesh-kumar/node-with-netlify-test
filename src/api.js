const express = require("express");
const serverless = require("serverless-http");
const request = require("request");

const app = express();
const router = express.Router();
const getNewsData = () => {
  request(
    "https://newsapi.org/v2/top-headlines?country=us&apiKey=476849f56dfd431ba3c716068456306e",
    function (error, response, body) {
      if (!error && response.statusCode == 200) {
        console.log(body); // Print the google web page.
        return body;
      }
    }
  );
};
router.get("/", (req, res) => {
  res.json({
    hello: getNewsData(),
  });
});

app.use(`/.netlify/functions/api`, router);

module.exports = app;
module.exports.handler = serverless(app);
