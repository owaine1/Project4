function github_routes(app, passport) {
    console.log('showing github routes');
    app.get('/auth/github', passport.authenticate('github', {
        scope: 'email'
    }));
    app.get('/auth/github/callback',
        passport.authenticate('github', {
            successRedirect: '/profile',
            failureRedirect: '/'
        }));
    app.get('/connect/github', passport.authorize('github', {
        scope: 'email'
    }));
    app.get('/connect/github/callback',
        passport.authorize('github', {
            successRedirect: '/profile',
            failureRedirect: '/'
        }));
}
module.exports = github_routes;

// from https://github.com/jaredhanson/passport-github#authenticate-requests
// app.get('/auth/github',
// passport.authenticate('github'));

// app.get('/auth/github/callback', 
// passport.authenticate('github', { failureRedirect: '/login' }),
// function(req, res) {
    //   // Successful authentication, redirect home.
//   res.redirect('/');
// });
