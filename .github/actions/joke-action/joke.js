import * as core from '@actions/core'

  
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

  await core.summary
.addHeading('Test Results')
.addCodeBlock(generateTestResults(), "js")
.addTable([
  [{data: 'File', header: true}, {data: 'Result', header: true}],
  ['Joke', res.joke],
  ['bar.js', 'Fail ❌'],
  ['test.js', 'Pass ✅']
])
.addLink('View staging deployment!', 'https://github.com')
.write()

  return res.joke;
}



module.exports = getJoke;