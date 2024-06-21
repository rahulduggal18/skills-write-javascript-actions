const core = require('@actions/core');  
const request = require("request-promise");

const options = {
  method: "GET",
  uri: "https://icanhazdadjoke.com/",
  headers: {
    Accept: "application/json",
    "User-Agent": "Writing JavaScript action GitHub Skills course.",
  },
  json: true,
};

async function getJoke() {
  const res = await request(options);

  core.summary.addQuote('To be or not to be', 'Shakespeare')
  core.summary.addQuote(res.joke, 'Joke')

  return res.joke;
}



module.exports = getJoke;