'use strict';

angular.module('tillerApp')
  .controller('MainCtrl', [ '$scope','User', 'Event', function ($scope, User, Event) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    $scope.user = User;
    $scope.event = Event;
    $scope.eventData = $scope.event.getCurrentEvents();

  }]);
