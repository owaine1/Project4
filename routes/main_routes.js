var router = require('express').Router();
var passport = require('../mongodb/passport');
// var GITHUBUSERCLASS = require('../mongodb/mongoose_connection');
module.exports = router;

router.get('/', do_homepage);
router.get('/settings', do_settings);
router.get('/gists', do_gists);
router.get('/help', do_help);
router.get('/logout', do_logout);

function do_homepage(req, res) {
    console.log('do homepage');
    res.render('home');
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

// authorization
router.get('/api/v1/auth', passport.authenticate('github', {
    scope: ['user:email']
}));

router.get('/api/v1/git_callback',
    passport.authenticate('github', {
        failureRedirect: '/'
    }), do_authenticated);

function do_authenticated(req, res) {
    console.log('authenticated!');
    // Successful authentication, redirect.
    res.json({
        message: 'authenticated - proceed!'
    });
}
// api
// router.get('/api/v1/read/', do_read);
// router.post('/api/v1/create/', do_create);
// router.put('/api/v1/update/', do_update);

// need read, create and update functions.
// but need to understand what the schema looks like first
