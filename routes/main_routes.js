var router = require('express').Router();

// var GITHUBUSERCLASS = require('../mongodb/mongoose_connection');
module.exports = router;

router.get('/', do_homepage);

function do_homepage(req, res) {
    console.log('do homepage');
    res.render('index');
}
// api

// router.get('/api/v1/read/', do_read);
// router.post('/api/v1/create/', do_create);
// router.put('/api/v1/update/', do_update);

// need read, create and update functions.
// but need to understand what the schema looks like first
