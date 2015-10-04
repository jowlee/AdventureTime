'use strict';

angular.module('AdventureTime')
.controller('EventsCtrl', function ($scope, $location, $http) {
    $scope.projects = [];
    $scope.projectToAdd = {active: true};

    $scope.getCurrentProjects = function() {
        $http.get('/api/projects').success(function(projects) {
            $scope.projects = projects;
        });
        $scope.past = false;
    };

  

    $scope.getCurrentProjects(); // update the webpage when connecting the controller
});
