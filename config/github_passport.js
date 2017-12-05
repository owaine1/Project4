var GitHubStrategy = require('passport-github').Strategy;

function github_passport(User, passport, configAuth) {
    passport.use(new GitHubStrategy({
        clientID: configAuth.githubAuth.clientID,
        clientSecret: configAuth.githubAuth.clientSecret,
        callbackURL: configAuth.githubAuth.callbackURL,
        passReqToCallback: true
    },
        //   wonder if need req; need accessToken, cb. added done
        function (req, token, refreshToken, profile, done) {
            process.nextTick(function () {
                if (!req.user) {
                    User.findOne({
                        'github.id': profile.id
                    }, function (err, user) {
                        if (err)
                            return done(err);
                        if (user) {
                            if (!user.github.token) {
                                user.github.token = token;
                                user.github.name = profile.name.givenName
                                //  + ' ' + profile.name.familyName;
                                user.github.email = profile.emails[0].value;
                                user.save(function (err) {
                                    if (err)
                                        throw err;
                                    return done(null, user);
                                });
                            }
                            return done(null, user); // user found, return that user
                        } else {
                            var newUser = new User();
                            newUser.github.id = profile.id;
                            newUser.github.token = token;
                            newUser.github.name = profile.name.givenName;
                            newUser.save(function (err) {
                                if (err)
                                    throw err;
                                return done(null, newUser);
                            });
                        }
                    });
                } else {
                    var user = req.user;
                    user.github.id = profile.id;
                    user.github.token = token;
                    user.github.name = profile.name.givenName + ' ' +
                        // user.github.email = profile.emails[0].value;
                        user.save(function (err) {
                            if (err)
                                throw err;
                            return done(null, user);
                        });
                }
            });
        }));
}
module.exports = github_passport;

// from https://github.com/jaredhanson/passport-github#configure-strategy
// var GitHubStrategy = require('passport-github').Strategy;
// passport.use(new GitHubStrategy({
//     clientID: GITHUB_CLIENT_ID,
//     clientSecret: GITHUB_CLIENT_SECRET,
//     callbackURL: "http://127.0.0.1:3000/auth/github/callback"
//   },
//   function(accessToken, refreshToken, profile, cb) {
//     User.findOrCreate({ githubId: profile.id }, function (err, user) {
//       return cb(err, user);
//     });
//   }
// ));