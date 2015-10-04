'use strict';

angular.module('AdventureTime')
  .controller('UserCtrl', function ($scope, $http) {

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

    var getUserBio = function(){
      $http.get("/api/user/nick").success(function(user){
        $scope.user = user[0];
        console.log($scope.user);

      });
    };

    getUserBio();

  })
