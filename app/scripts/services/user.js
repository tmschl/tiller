'use strict';

angular.module('tillerApp')
  .service('User', function User() {
    var userObject = {
      isLoggedIn: false,
      username: '',
      password: ''
    };

    var userInterface = {
      isLoggedIn: function() {
        return userObject.isLoggedIn;
      },
      setUsername: function(username) {
        userObject.username = '';
        userObject.username = username;
      },
      setPassword: function(password) {
        userObject.password = '';
        userObject.password = password;
      },
      isValidUser: function() {
        // validate username and password on server
        var isValid = true;
        userObject.isLoggedIn = true;
        return isValid;
      }

    };

    return userInterface;

  });
