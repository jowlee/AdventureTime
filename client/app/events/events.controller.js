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



    $scope.fName = '';
    $scope.lName = '';
    $scope.passw1 = '';
    $scope.passw2 = '';
    $scope.users = [
    {id:1, eventName:'Skiing', eventLocation:"Mt. Everst" },
    {id:2, eventName:'Drinking',  eventLocation:"Your Hourse!" },
    {id:3, eventName:'Pooping',  eventLocation:"Toilet" },
    {id:4, eventName:'Eating', eventLocation:"Food Truck place" },
    {id:5, eventName:'Hiking', eventLocation:"Mt. Everest" }
    ];
    $scope.edit = true;
    $scope.error = false;
    $scope.incomplete = false;

    $scope.editUser = function(id) {
      if (id == 'new') {
        $scope.edit = true;
        $scope.incomplete = true;
        $scope.fName = '';
        $scope.lName = '';
        } else {
        $scope.edit = false;
        $scope.fName = $scope.users[id-1].fName;
        $scope.lName = $scope.users[id-1].lName;
      }
    };


});
