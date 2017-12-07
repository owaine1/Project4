function make_passport(passport) {

    var GitHubStrategy = require('passport-github2').Strategy;
    var creds = require('./creds.js');
    var git_creds = {
        clientID: creds.clientID,
        clientSecret: creds.clientSecret,
        callbackURL: creds.callbackURL // was callback_url
    };

    function get_access(accessToken, refreshToken, profile, done) {
        console.log('getting access');
        console.log(accessToken);
        profile.accessToken = accessToken;
        return done(null, profile);
    }

    var git_strategy = new GitHubStrategy(git_creds, get_access);
// //console.log(git_strategy)

    // passport.use(git_strategy);

    // passport.serializeUser(function (user, done) {
    //     done(null, user);
    // });
    // passport.deserializeUser(function (obj, done) {
    //     done(null, obj);
    // });
    return passport;
}
module.exports = make_passport;

// var User = require('../models/user');
// var configAuth = require('./auth');
// module.exports = function (passport) {
//     var serializer = require('./serializer');
//     serializer(User, passport);
//     var local_passport = require('./local_passport');
//     local_passport(User, passport);
//     var github_passport = require('./github_passport');
//     github_passport(User, passport, configAuth);
// 