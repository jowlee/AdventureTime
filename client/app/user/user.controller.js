'use strict';

angular.module('AdventureTime')
  .controller('UserCtrl', function ($scope, User) {
    $scope.currentUsers = User.query();
    $scope.pastUsers = User.past();

    $scope.changeView = function(view){
        if (view === 'past'){
            $scope.currentView = 'Past Developers';
            $scope.users = $scope.pastUsers;
        } else{
            $scope.currentView = 'Active Developers';
            $scope.users = $scope.currentUsers;
        }
        $scope.currentPage = 0;
    };
    })
  .filter('startFrom', function() {
    return function(input, start) {
        start = +start; //parse to int
        return input.slice(start);
    };
});
