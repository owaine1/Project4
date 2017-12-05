console.log('loaded frontend_app');
// my code
// // dndLists as dependancy in []
// var frontend_app = angular.module('github_users', []);
// frontend_app.controller('data_github_users', do_data_github_users);

// function do_data_github_users($scope, $http) {
// console.log('getting github users');
// $http.get('api/v1/read').then(function (server_object) {

//     $scope.github_users = server_object.data;
//     console.log($scope.github_users);
// });
// }

// -    -   -   -   -
// var frontend_app = angular.module('git-app', ['ngRoute']);
// console.log('loaded frontend_app still');
// frontend_app.controller(main_view);
// function main_view($scope) {
//     console.log('looking at main_view func');
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
(function () {
    'use strict';
    angular
        .module('git-app', ['ngRoute', 'gm.dragDrop'])
        .run(run);
    // to implement
    // frontend_app.config(do_routes);
    // frontend_app.controller('main_view_controller', do_main_view_controller);
    // frontend_app.controller('login_controller', do_login_controller);
    // function do_login($scope, $http) {
    // }

    function run($rootScope, $filter) {
        $rootScope.categories = [
            {
                items: [
                    { name: "Item 1" }
                ]
            }, {
                items: [
                    { name: "Item 2" }
                ]
            }, {
                items: [
                    { name: "Item 3" }
                ]
            }, {
                items: [
                    { name: "Item 4" }
                ]
            }
        ];
        $rootScope.orderedItems = [
            {
                order: 1,
                value: "Repositories"
            },
            {
                order: 2,
                value: "Contributions"
            },
            {
                order: 3,
                value: "Followers"
            },
            {
                order: 4,
                value: "Following"
            }
        ];
        $rootScope.onHover = function (item) {
            return function (dragItem, mouseEvent) {
                if (item != dragItem)
                    dragItem.order = item.order + ((mouseEvent.offsetY || -1) > 0 ? 0.5 : -0.5)
            }
        }
        $rootScope.reorder = function reorder() {
            var _orderedItems = $filter('orderBy')($rootScope.orderedItems, 'order');
            for (var i = 0; i < _orderedItems.length; i++) {
                _orderedItems[i].number = _orderedItems[i].order = i + 1;
            }
        }
        $rootScope.reset = function reset(droppedItem) {
            droppedItem.order = droppedItem.number;
        }
        $rootScope.getDropHandler = function (category) {
            return function (dragOb) {
                if (category.items.indexOf(dragOb.item) < 0) {
                    dragOb.category.items.splice(dragOb.category.items.indexOf(dragOb.item), 1);
                    category.items.push(dragOb.item);
                    return true;  // Returning truthy value since we're modifying the view model
                }
            }
        }
    }
})();