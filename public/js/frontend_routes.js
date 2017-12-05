
function do_routes($routeProvider) {
    console.log('doing frontend routes');
    $routeProvider.when(
        '/login', {
            templateUrl: 'partials/login.html', // check is correct route?
            controller: 'login_controller'
        })
        .when(
        '/gists', {
            templateUrl: 'views/gists.ejs',
            controller: 'gists_controller'
        })
        .when(
        '/', {
            templateUrl: 'views/main-view.ejs',
            controller: 'main-view_controller'
        })
        .when(
        '/help', {
            templateUrl: 'views/help.ejs',
            controller: 'help_controller'
        })
        .when(
        '/', {
            templateUrl: 'views/main-view.ejs',
            controller: 'main-view_controller'
        })
        .when(
        '/repos-main-page', {
            templateUrl: 'views/repos-view.ejs',
            controller: 'repos-view_controller'
        })
        .when(
        '/settings', {
            templateUrl: 'views/settings.ejs',
            controller: 'settings_controller'
        })
        .when(
        '/signout', {
            templateUrl: 'views/signout.ejs',
            controller: 'signout_controller'
        });
}

// Likely add or take away from this...
// gists.ejs X
// help.ejs X
// main - view.ejs X
// repos - view.ejs X
// settings.ejs X
// signout.ejs X
