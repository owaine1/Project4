var passport = require('passport');
var GitHubStrategy = require('passport-github2').Strategy;
var creds = require('./creds.js');
var git_creds = {
    clientID: creds.clientID,
    clientSecret: creds.clientSecret,
    callbackURL: creds.callback_url
};

function get_access(accessToken, refreshToken, profile, done) {
    console.log('getting access');
    console.log(profile);
    return done();
}

var git_strategy = new GitHubStrategy(git_creds, get_access);

passport.use(git_strategy);

module.exports = passport;

// var User = require('../models/user');
// var configAuth = require('./auth');
// module.exports = function (passport) {
//     var serializer = require('./serializer');
//     serializer(User, passport);
//     var local_passport = require('./local_passport');
//     local_passport(User, passport);
//     var github_passport = require('./github_passport');
//     github_passport(User, passport, configAuth);
// }