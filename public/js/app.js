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
      when('/event/new', {
        templateUrl: 'partials/event-create.html',
        controller: 'EventCreateCtrl'
      }).
      when('/event/:id', {
        templateUrl: 'partials/event.html',
        controller: 'EventCtrl'
      }).
      otherwise({
        redirectTo: '/events'
      });
  }
]);

