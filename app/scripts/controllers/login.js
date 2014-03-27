'use strict';

angular.module('tillerApp')
  .controller('LoginCtrl', ['$scope', '$location', 'User', function ($scope, $location, User) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];


    $scope.setUsername = User.setUsername;
    $scope.setPassword = User.setPassword;

    $scope.isValidUser = function() {
      if (User.isValidUser){
        User.isValidUser();
        $location.path('#/');
      }
    };

  }]);
