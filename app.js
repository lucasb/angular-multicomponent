'use strict';

angular.module('app', [
  'ng',
  'ngRoute',
  'common',
  'component1',
  'component2'
 ]).config(function($routeProvider, $locationProvider) {
    $routeProvider
    .when("/component1", {
        templateUrl: "./component1/partial.html"
    })
    .when("/component2", {
        templateUrl: "./component2/partial.html"
    });
});
