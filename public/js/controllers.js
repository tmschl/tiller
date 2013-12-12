var tillerControllers = angular.module('tillerControllers', [])

  .factory("EventService", function(){
    return {
      eventName: '',
      eventData: '',
      eventColabs: [],
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

  .controller('EventCreateCtrl', ['$scope', '$location', '$routeParams', 'EventService', function($scope, $location, $routeParams, EventService) {
    console.log(EventService);
    $scope.eventName = EventService;
//    $scope.eventDate = EventService.eventDate;
//    $scope.eventColabs = EventService.eventColabs;
    $scope.saveEvent = function() {
      console.log(EventService);
      //EventService.setData(this.event);
      $location.path('event/'+this.$id);
    };
  }])

  .controller('EventCtrl', ['$scope', '$routeParams', '$location', 'EventService', function($scope, $routeParams, $location, EventService) {
  }]);

