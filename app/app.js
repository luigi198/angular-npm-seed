'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
  'ui.router',
  'myApp.landing'
]).config(['$locationProvider', function($locationProvider) {
  $locationProvider.html5Mode(true);
}]);
