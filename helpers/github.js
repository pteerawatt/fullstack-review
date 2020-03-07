const request = require('request');
const config = require('../config.js');
const save = require('../database/index.js')

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
      let info = JSON.parse(body);
      let reposNames = info.map((repoObj) => {
        save.save(repoObj.id, repoObj.name, repoObj.owner.login, repoObj.description, repoObj.forks_count)
      } )
    } else {
      console.log(error)
    }
  }
  request(options, callback)
}

module.exports.getReposByUsername = getReposByUsername;