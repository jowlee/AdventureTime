'use strict';

angular.module('AdventureTime')
.controller('EventsCtrl', function ($scope, $location, $http) {

    $scope.events = [
      {eventName:'Skiing', eventCost: 5.00, eventLocation:"Mt. Everst" },
      {eventName:'Drinking',  eventCost: 5.00, eventLocation:"Your Hourse!" },
      {eventName:'Pooping',  eventCost: 5.00, eventLocation:"Toilet" },
      {eventName:'Eating', eventCost: 5.00, eventLocation:"Food Truck place" },
      {eventName:'Hiking', eventCost: 5.00, eventLocation:"Mt. Everest" }
    ];

    $scope.edit = true;
    $scope.error = false;
    $scope.incomplete = false;
    $scope.advEvent = {};

    $scope.saveEvent = function() {
      var eventAdd = {
        eventName:$scope.advEvent.eventName,
        eventCost:$scope.advEvent.eventCost,
        eventLocation:$scope.advEvent.eventLocation };
      $scope.events.push(eventAdd);
      $scope.eventAdd = {}

      // TODO Make call to server to save
    };

});
