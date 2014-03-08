'use strict';

angular.module('tillerApp')
  .controller('MainCtrl', [ '$scope','User', function ($scope, User) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    $scope.user = User;
    $scope.logUserObj = User.logUserObj;

  }]);
