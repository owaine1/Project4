var User = require('../models/user');
var configAuth = require('./auth');
module.exports = function (passport) {
    var serializer = require('./serializer');
    serializer(User, passport);
    var local_passport = require('./local_passport');
    local_passport(User, passport);
    var github_passport = require('./github_passport');
    github_passport(User, passport, configAuth);
}