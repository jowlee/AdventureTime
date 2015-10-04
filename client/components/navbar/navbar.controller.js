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



    $scope.isActive = function(route) {
      return route === $location.path();
    };

    // Toggles the display of URP form
    var getCurrentUser = function(){
      $http.get("/api/user/displayURP")
        .success(function(data){
          $scope.displayURP = data.displayURP;
        });
    };


  });
