'use strict';

angular.module('common', [
  'ng',
  'ngRoute',
  'app1',
  'app2'
 ]).config(function($routeProvider) {
    $routeProvider
    .when("/", {
        templateUrl : "index.html"
    })
    .when("/app1", {
        templateUrl : "../app1/index.html"
    })
    .when("/app2", {
        templateUrl : "../app2/index.html"
    });
});
