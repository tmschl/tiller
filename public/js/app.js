var tillerApp = angular.module('tillerApp', [
  'ngRoute',
  'tillerControllers'
]);

tillerApp.config(['$routeProvider',
  function ($routeProvider) {
    $routeProvider.
      when('/events', {
        templateUrl: 'partials/event-list.html',
        controller: 'EventListCtrl'
      }).
      when('/phones/:eventId', {
        templateUrl: 'partials/event-detail.html',
        controller: 'EventsDetailCtrl'
      }).
      otherwise({
        redirectTo: '/events'
      });
  }
]);

tillerApp.controller(
