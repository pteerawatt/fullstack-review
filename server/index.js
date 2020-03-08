const express = require('express');
const bodyParser = require('body-parser');
const getReposByUsername = require('../helpers/github.js');
const jsonParser = bodyParser.json();
const db = require('../database/index.js')
let app = express();

app.use(express.static(__dirname + '/../client/dist'));

app.post('/repos', jsonParser, function (req, res) {
  // TODO - your code here!
  // This route should take the github username provided
  // and get the repo information from the github API, then
  // save the repo information in the database
  // console.log('POST req was sent here')
  let userName = req.body.userName
  getReposByUsername.getReposByUsername(userName);
  res.send('successfully post')
});

app.get('/repos', function (req, res) {
  // TODO - your code here!
  // This route should send back the top 25 repos
  db.Repo.find().sort({'forks_count': -1}).limit(25).exec((err, repos) => { res.send(repos)})
});

let port = 1128;

app.listen(port, function() {
  console.log(`listening on port ${port}`);
});

