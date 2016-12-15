'use strict';

/**
 * @ngdoc overview
 * @name jbApp
 * @description
 * # jbApp
 *
 * Main module of the application.
 */
angular
  .module('jbApp', [
    'ngRoute'
  ])
  .config(['$routeProvider', function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/:id', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  }]);
