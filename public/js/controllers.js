var tillerControllers = angular.module('tillerControllers', []);

tillerControllers.controller('EventListCtrl', ['$scope', '$routeParams',
  function ($scope) {
   // $http.get('phones/phones.json').success(function(data) {
    //  $scope.phones = data;
    //});ope.orderProp = 'age';
    $scope.events = [
        {'name': 'Nexus S',
             'snippet': 'Fast just got faster with Nexus S.'},
        {'name': 'Motorola XOOM™ with Wi-Fi',
             'snippet': 'The Next, Next Generation tablet.'},
        {'name': 'MOTOROLA XOOM™',
             'snippet': 'The Next, Next Generation tablet.'}
    ];
  }
]);

tillerControllers.controller('EventCreateCtrl', ['$scope', '$routeParams',
  function($scope, $routeParams) {
    $scope.saveEvent = function(event_data) {
      console.log(event_data);
    };
  }
]);

tillerControllers.controller('EventCtrl', ['$scope', '$routeParams', '$location',
  function($scope, $routeParams, $location) {
    $scope.saveEvent = function(event_data) {
      console.log(this);
      $location.path('event/'+this.$id);
    };
  }
]);
