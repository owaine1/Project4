
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
            templateUrl: 'views/main_view.ejs',
            controller: 'main_view_controller'
        })
        .when(
        '/help', {
            templateUrl: 'views/help.ejs',
            controller: 'help_controller'
        })
        
        .when(
        '/repos-main-page', {
            templateUrl: 'views/repos_view.ejs',
            controller: 'repos_view_controller'
        })
        .when(
        '/settings', {
            templateUrl: 'settings.ejs',
            controller: 'settings_controller'
        })
        .when(
        '/logout', {
            templateUrl: 'views/logout.ejs',
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
