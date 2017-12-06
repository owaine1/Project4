// var git_app = angular.module('git-app', []); note for ref, this is in frontend_app.js and function/s
// below will be called by frontent_app.js
// another tut suggests:
// git_app.config(function ($routeProvider){
//     $routeProvider.when(
//         blaaaaah
//     )
// }
// .otherwise({ redirectTo: '/' });
// });
function do_routes($routeProvider) {
    console.log('doing frontend routes');
    $routeProvider.when(
        '/login', {
            templateUrl: 'views/login.ejs', // check is correct route?
            controller: 'login_controller'
        })
        .when(
        '/gists', {
            templateUrl: 'views/gists.ejs',
            controller: 'gists_controller'
        })
        .when(
        '/', {
            templateUrl: 'views/home.ejs',
            controller: 'home_view_controller'
        })
        .when(
        '/help', {
            templateUrl: 'views/help.ejs',
            controller: 'help_controller'
        })
        
        .when(
        '/repos', {
            templateUrl: 'views/repos.ejs',
            controller: 'repos_view_controller'
        })
        // .when(
        // '/settings', {
        //     templateUrl: 'settings.ejs',
        //     controller: 'settings_controller'
        // })
        .when(
        '/logout', {
            templateUrl: 'views/logout.ejs',
            controller: 'signout_controller'
        });
}

// Likely add or take away from this...
// gists.ejs X
// help.ejs X
// home.ejs X
// repos.ejs X
// settings.ejs X
// signout.ejs X
