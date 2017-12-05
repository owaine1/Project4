// NB this is one of the first parts of building backend. Get it done well.
var mongoose = require('mongoose');
mongoose.Promise = global.Promise;
var url = 'mongodb://localhost:27500/github';

mongoose.connect(url, {
  useMongoClient: true
});

var repository_doc = {
  no_of_commits: Number,
  last_commit: String,
  repository_url: String,
}
var rep_schema = new mongoose.Schema(repository_doc);

var git_doc = {
  user: String,
  repositories:[rep_schema]
}

// repository_doc: rep_schema
var git_schema = new mongoose.Schema(git_doc)

var GITUSER = mongoose.model('git_user', git_schema);

module.exports = GITUSER;

// var mongoose = require('mongoose');
// mongoose.Promise = global.Promise;

// var url = 'mongodb://localhost:27500/githubdb';
// mongoose.connect(url, { useMongoClient: true });

// var settings_structure{
//     view1: Boolean,
//     view2: Boolean,
//     view3: Boolean,
//     view4: Boolean,
//     view5: Boolean,
//     view6: Boolean,
// }

// var settings_schema = new mongoose.Schema(settings_structure);

// var github_user_structure = {
//     name: String,
//     password: String, //may need to clarify this as pos shouldn't be stored
//     //look at passport Unit3
//     settings: settings_structure
// }

// var github_user_schema = new mongoose.Schema(settings_schema);

// var GITHUBUSERCLASS = mongoose.model('github_users', github_user_structure);

// module.exports = GITHUBUSERCLASS;