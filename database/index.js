const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/fetcher');

let repoSchema = new mongoose.Schema({
  // TODO: your schema here!
  _id: Number,
  url: { type: String, unique: true },
  name: String,
  owner: String,
  description: String,
  forks_count: Number
});


let Repo = mongoose.model('Repo', repoSchema);

let save = (id, url, name, login, description, forks_count) => {
  // TODO: Your code here
  // This function should save a repo or repos to
  // the MongoDB
  var newRepo = new Repo({
    '_id': id,
    'url': url,
    'name': name,
    'owner': login,
    'description': description,
    'forks_count': forks_count
  })
  newRepo.save((err) => {
    if (err) {
      console.log(err)
    }
  })
}

module.exports.Repo = Repo;
module.exports.save = save;