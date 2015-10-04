'use strict';

angular.module('AdventureTime')
  .config(function ($stateProvider) {
    $stateProvider
      .state('projects', {
        url: '/projects',
        templateUrl: 'app/events/events.html',
        controller: 'ProjectsCtrl'
      })
  });
