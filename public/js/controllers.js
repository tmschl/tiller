var tillerControllers = angular.module('tillerControllers', []);

tillerControllers.controller('EventListCtrl', ['$scope', '$routeParams',
  function ($scope) {
   // $http.get('phones/phones.json').success(function(data) {
    //  $scope.phones = data;
    //});

    $scope.orderProp = 'age';
  }
]);

tillerControllers.controller('PhoneDetailCtrl', ['$scope', '$routeParams',
  function($scope, $routeParams) {
    $scope.phoneId = $routeParams.phoneId;
  }
]);
