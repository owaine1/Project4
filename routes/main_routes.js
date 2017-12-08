function make_router(passport) {
    var router = require('express').Router();
    var passport = require('../mongodb/passport')(passport);
    var request = require('request');
    // var GITHUBUSERCLASS = require('../mongodb/mongoose_connection');

    // internal routes
    router.get('/', do_homepage);
    router.get('/gists', do_gists);
    router.get('/help', do_help);
    router.get('/settings', do_settings);
    router.get('/logout', do_logout);
    router.get('/repos', do_repos);
    router.get('/contributions', do_contributions);
    router.get('/reps', do_reps);

    function do_homepage(req, res) {
        console.log('do homepage');
        res.render('home'); //was res.sendFile('home');
    }
    function do_settings(req, res) {
        console.log('doing settings');
        res.render('settings');
    }
    function do_gists(req, res) {
        console.log('doing gists');
        res.render('gists');
    }
    function do_help(req, res) {
        console.log('doing help');
        res.render('help');
    }
    function do_logout(req, res) {
        console.log('doing logout');
        res.render('logout');
    }
    function do_repos(req, res) {
        console.log('doing repos');
        res.render('repos');
    }
    function do_contributions(req, res) {
        console.log('doing contributions');
        res.render('contributions');
    }
    function do_reps(req, res) {
        console.log('doing reps page test');
        res.render('reps');
    }

    // data stuff. API for github...
    router.get('/api/v2/github_data', do_github_data); // no route for github_data
    router.get('/api/v2/reps', do_repositories); // no route for repositories
    router.delete('/api/v2/delete/:id');

    function do_github_data(req, res) {
        console.log('doing backend github data');
        console.log(req.user.id);
        console.log(req.user.displayName);
        console.log(req.user.username);
        console.log(req.user.profileUrl);

        var options = {
            url: 'https://api.github.com/user/repos?access_token=' + req.user.accessToken,
            headers: {
                'User-Agent': 'request'
            }
        }
        function callback(err, response, body) {
            if (err) console.log(err);
            res.json(JSON.parse(body));
        }
        request(options, callback);
    }
    function do_repositories(req, res) {
        console.log('doing repositories');

        // max 100 repos per page (github limit)
        var options = {
            url: 'https://api.github.com/user/repos?access_token=' + req.user.accessToken + '&per_page=100&page=1',
            headers: {
                'User-Agent': 'request'
            }
        }
        function callback(err, response, body) {
            if (err) console.log(err);
            res.json(JSON.parse(body));
        }
        request(options, callback);
    }

    // authorization
    router.get('/api/v2/auth', passport.authenticate('github', {
        scope: ['user:email']
    }));

    router.get('/api/v2/git_callback',
        passport.authenticate('github', {
            failureRedirect: '/#!/login'
        }), do_authenticated);

    function do_authenticated(req, res) {
        console.log('Yes you\'re logged in!');
        console.log(req.params);
        // Successful authentication, redirect.
        res.json({
            message: 'Logged in successfully!'
        });
        res.redirect('/#!/logged_in');
    }
    router.get('/api/2/logout', function (req, res) {
        req.logout();
        res.redirect('/#!/');
    });
    return router;
}
module.exports = make_router;

// api database stuff. This likely needs to be in another file, for adding mongodb communication, adding users' preferences to the database and saving them for their next loggin! Whopeee!
// router.get('/api/2/read/', do_read);
// router.post('/api/v2/create/', do_create);
// router.put('/api/v2/update/', do_update);
// need read, create and update functions.
// but need to understand what the schema looks like first
