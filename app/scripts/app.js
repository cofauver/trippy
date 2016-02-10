'use strict';

/**
 * @ngdoc overview
 * @name trippyApp
 * @description
 * # trippyApp
 *
 * Main module of the application.
 */
angular
  .module('trippyApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/trip', {
        templateUrl: 'views/trip-detail.html',
        controller: 'TripDetailCtrl',
        controllerAs: 'tripDetail'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
