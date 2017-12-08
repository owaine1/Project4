console.log('loaded frontend_app');
var frontend_app = angular.module('git-app', ['ngRoute']);
// frontend_app.config(do_routes);
frontend_app.controller('reps_controller', do_reps_controller);

// my code
// // dndLists as dependancy in []
// var frontend_app = angular.module('github_users', []);
// frontend_app.controller('data_github_users', do_data_github_users);

// function do_data_github_users($scope, $http) {
// console.log('getting github users');
// $http.get('api/v2/read').then(function (server_object) {

//     $scope.github_users = server_object.data;
//     console.log($scope.github_users);
// });
// }

// -    -   -   -   -
// var frontend_app = angular.module('git-app', ['ngRoute']);
// console.log('loaded frontend_app still');
// frontend_app.controller(home));
// function home($scope) {
//     console.log('looking at home func');
//     // $scope.person = { name: "AMMMAZZING" };
// }
// -    -   -   -   -

// W3s!;)
// var app = angular.module('myApp', []);
// app.controller('myCtrl', function ($scope, $http) {
//     $http.get("welcome.htm").then(function (response) {
//         $scope.myWelcome = response.data;
//     });
// });
// N.B. from Angjs 1.3 onwards, functions are not automatically run (in ref to seeing older code online).
// not my code. borrowed and adapted
// Most based on myDraggable/mash-up - https://docs.angularjs.org/guide/directive


    // to implement
    // frontend_app.config(do_routes);
    // frontend_app.controller('home_view_controller', do_home_view_controller);
    // frontend_app.controller('login_controller', do_login_controller);

