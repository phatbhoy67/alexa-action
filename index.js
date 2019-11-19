const core = require("@actions/core");
const github = require("@actions/github");
const axios = require("axios");
const cheerio = require("cheerio");
const baseUrl = "https://www.alexa.com/siteinfo/";

try {
  // `who-to-greet` input defined in action metadata file
  const siteUrl = core.getInput("site-url");
  console.log(`Hello ${siteUrl}!`);

  const response = await axios.get(baseUrl + siteUrl);
  const pageHTML = await response.data;
  const $ = cheerio.load(pageHTML);
  let commaCut = /\,/g;
  let rankMini = $(".rankmini-rank")
    .html()
    .trim()
    .replace("<span>#</span>", "")
    .replace(commaCut, "");
  console.log(rankMini);
  const rankValue = parseInt(rankMini, 10);
  console.log(typeof rankValue, rankValue);
  core.setOutput("rank", rankValue);
  // Get the JSON webhook payload for the event that triggered the workflow
  const payload = JSON.stringify(github.context.payload, undefined, 2);
  console.log(`The event payload: ${payload}`);
} catch (error) {
  core.setFailed(error.message);
}
