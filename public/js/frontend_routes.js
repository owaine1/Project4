
function do_routes($routeProvider) {
    console.log('doing FE routes');
    $routeProvider.when(
      '/login', {
        templateUrl: 'partials/login.html',
        controller: 'login_controller'
      }
    ).when(
      '/', {
        templateUrl: 'partials/home.html',
        controller: 'home_controller'
      }
    ).when('/logged_in', {
      templateUrl: 'partials/logged_in.html'
    });
  }

  gists.ejs
  help.ejs
  main-view.ejs
  repos-main-page.ejs
  settings.ejs
  signout.ejs
