'use strict';

angular.module('observatory3App')
  .controller('NavbarCtrl', function ($scope, $location, $http, Auth) {
    $scope.menu = [{
      'title': 'Home',
      'link': '/'
    },{
      'title': 'Profile',
      'link': '/profile'
    },{
      'title': 'Adventures',
      'link': '/adventures'
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
