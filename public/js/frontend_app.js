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
// not my code. borrowed


(function () {
    'use strict';
    // Based on myDraggable - https://docs.angularjs.org/guide/directive
    angular
        .module('git-app', ['gm.dragDrop'])
        .run(run);
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