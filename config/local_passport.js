
// // var LocalStrategy = require('passport-local').Strategy;
// function local_passport(User, passport) {
//     passport.use('local-signup', new LocalStrategy({
//         usernameField: 'email',
//         passwordField: 'password',
//         passReqToCallback: true // allows us to pass back the entire request to the callback
//     },
//         function (req, email, password, done) {
//             process.nextTick(function () {
//                 User.findOne({
//                     'local.email': email
//                 }, function (err, user) {
//                     if (err)
//                         return done(err);
//                     if (user) {
//                         return done(null, false, req.flash('signupMessage', 'Email is already taken!'));
//                     } else {
//                         var newUser = new User();
//                         newUser.local.email = email;
//                         newUser.local.password = newUser.generateHash(password);
//                         newUser.save(function (err) {
//                             if (err)
//                                 throw err;
//                             return done(null, newUser);
//                         });
//                     }
//                 });
//             });
//         }));
//     // Local login
//     passport.use('local-login', new LocalStrategy({
//         usernameField: 'email',
//         passwordField: 'password',
//         passReqToCallback: true // allows to pass back the entire request to the callback
//     },
//         function (req, email, password, done) { // callback & email & password from form
//             console.log('finding user in mongodb');
//             // checking to see if user trying to login already exists
//             User.findOne({
//                 'local.email': email
//             }, function (err, user) {
//                 // if any errors, return the error before anything else
//                 if (err)
//                     return done(err);
//                 // if no user is found, return the message
//                 if (!user)
//                     return done(null, false, req.flash('loginMessage', 'No user found.'));
//                 if (!user.validPassword(password))
//                     return done(null, false, req.flash('loginMessage', 'Oops! Wrong password.'));
//                 return done(null, user);
//             });
//         }));
// }
// module.exports = local_passport;