console.log('Hello frontend controllers')
function do_home_controller($scope, $http) {
    console.log('doing home controller');
}

function do_login_controller($scope, $http, $routeParams, $location) {
    console.log('doing login controller');
    console.log($routeParams);
    $http.get('/api/v2/auth').then(
        function (result) {
            console.log(result);
            $location.path('logged_in'); // up to here!
        }
    );
}

function do_github_data($scope, $http) {
    console.log('doing github data');
}

function do_reps_controller($scope, $http) {
    console.log('hello doing repos controller');
    $http.get('/api/v2/reps')
        .then(
        function (results) {
            console.log('data from github');
            console.log(results.data);
            $scope.reps = results.data;
        }
        );
    // needs to be tested 08 Dec
    $scope.delete = function (rep) {
        console.log('doing deleting repository');
        console.log(rep);
        $http.delete('/api/v2/delete/' + rep.id);
    }
}