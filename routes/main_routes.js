var router = require('express').Router();
var passport = require('../mongodb/passport');
// var GITHUBUSERCLASS = require('../mongodb/mongoose_connection');
module.exports = router;

router.get('/', do_homepage);

function do_homepage(req, res) {
    console.log('do homepage');
    res.render('signin');
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
