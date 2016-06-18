'use strict';

/**
 * @ngdoc overview
 * @name recettesFamilleApp
 * @description
 * # recettesFamilleApp
 *
 * Main module of the application.
 */
angular
  .module('recettesFamilleApp', [
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
        controller: 'AccueilCtrl',
        controllerAs: 'main'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .when('/favoris', {
          templateUrl: 'views/favoris.html',
          controller: 'FavorisCtrl',
          controllerAs: 'fav'
      })
      .when('/search', {
          tempalteUrl: 'views/search.html',
          controller: 'SearchCtrl',
          controllerAs: 'search'
      })
      .otherwise({
        templateUrl : '404.html'
      });
  });
