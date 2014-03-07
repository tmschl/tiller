'use strict';

angular.module('tillerApp')
  .service('User', function User() {
    // AngularJS will instantiate a singleton by calling "new" on this function
    var user = {
      isLoggedIn: false
    };

    return user;
  });
