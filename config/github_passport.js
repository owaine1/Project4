var GitHubStrategy = require('passport-github').Strategy;

function github_passport(User, passport, configAuth) {
    

passport.use(new GitHubStrategy({
    clientID: configAuth.githubAuth.clientID,
    clientSecret: configAuth.githubAuth.clientSecret,
    callbackURL: configAuth.githubAuth.callbackURL,
    passReqToCallback: true
  },

//   wonder if need req; need accessToken, cb. added done
function(req, token, refreshToken, profile, done) {
   


  function(accessToken, refreshToken, profile, cb) {
    User.findOrCreate({ githubId: profile.id }, function (err, user) {
      return cb(err, user);
    });
  }
));
}