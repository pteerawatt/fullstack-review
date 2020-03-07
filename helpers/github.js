const request = require('request');
const config = require('../config.js');

let getReposByUsername = (userName) => {
  // TODO - Use the request module to request repos for a specific
  // user from the github API

  // The options object has been provided to help you out,
  // but you'll have to fill in the URL
  let options = {
    url: `https://api.github.com/users/${userName}/repos`,
    headers: {
      'User-Agent': 'request',
      'Authorization': `token ${config.TOKEN}`
    }
  };

  const callback = (error, res, body) => {
    if (!error && res.statusCode === 200) {
      const info = JSON.parse(body);
      const reposNames = info.map((i) => i.name)
      console.log('repo name: ' + JSON.stringify(reposNames))
    } else {
      console.log(error)
    }
  }
  request(options, callback)
}

module.exports.getReposByUsername = getReposByUsername;