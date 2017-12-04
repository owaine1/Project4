var express = require('express');
var backend_app = express();
var bodyParser = require('body-parser');
var routes = require('./routes/main_routes');
var port = 3500;
var mongoose = require('mongoose');
mongoose.Promise = require('bluebird');
var passport = require('passport');
var flash = require('connect-flash');

backend_app.set('view engine', 'ejs');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var session = require('express-session');

var configDB = require('./config/database.js');

backend_app.use(express.static('public'));
backend_app.use(bodyParser.urlencoded({
    extended: true
}));

backend_app.use(bodyParser.json());
backend_app.use(routes);

backend_app.listen(port, listening);
function listening() {
    console.log('broadcasting on localhost:' + port);
}

app.use(express.static('public'));
mongoose.connect(configDB.url, {
    useMongoClient: true
});

require('./config/passport')(passport);
app.use(cookieParser());
app.use(bodyParser());
app.set('view engine', 'ejs');
app.use(session({
    secret: 'myamazingapp'
}));
app.use(passport.initialize());
app.use(passport.session());
app.use(flash());

// routes
require('./app/routes/main_routes.js')(app, passport); // load routes

// launch
app.listen(port);
console.log('The magic happens on port ' + port);