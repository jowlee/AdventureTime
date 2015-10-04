'use strict';

angular.module('AdventureTime')
  .controller('NavbarCtrl', function ($scope, $location, $http) {
    $scope.menu = [{
      'title': 'Home',
      'link': '/'
    },{
      'title': 'Profile',
      'link': '/user'
    },{
      'title': 'Adventures',
      'link': '/events'
    }];



    var getUserBio = function(){
      $http.get("/api/user/nick").success(function(user){
        $scope.user = user[0];
        console.log($scope.user);

      });
    };


  });
