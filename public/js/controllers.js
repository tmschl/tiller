var tillerControllers = angular.module('tillerControllers', [])

  .factory("EventService", function(){
    var formData = {};

    return {
        getData: function () {
            return formData;
        },
        setData: function (newFormData) {
            formData = newFormData;
        },
        resetData: function () {
            formData = {};
        }
    };
  })

  .controller('EventListCtrl', ['$scope', '$routeParams', function ($scope) {
    //  $http.get('phones/phones.json').success(function(data) {
    //    $scope.phones = data;
    //  });ope.orderProp = 'age';
    $scope.events = [{
      'name': 'Nexus S',
      'snippet': 'Fast just got faster with Nexus S.'
    },
    {
      'name': 'Motorola XOOM™ with Wi-Fi',
      'snippet': 'The Next, Next Generation tablet.'
    },
    {
      'name': 'MOTOROLA XOOM™',
      'snippet': 'The Next, Next Generation tablet.'
    }];
  }])

  .controller('EventCreateCtrl', ['$scope', '$routeParams', 'EventService', function($scope, $routeParams, EventService) {
    EventService.resetData();
  }])

  .controller('EventCtrl', ['$scope', '$routeParams', '$location', 'EventService', function($scope, $routeParams, $location, EventService) {
    $scope.event = EventService.getData();
    $scope.saveEvent = function() {
      EventService.setData(this.event);
      $location.path('event/'+this.$id);
    };
  }]);

