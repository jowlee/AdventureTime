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


  });
