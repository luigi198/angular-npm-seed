(function() {
  'use strict';
  angular.module('myApp.landing', [])
    .config(['$urlRouterProvider', '$stateProvider', function ($urlRouterProvider, $stateProvider) {
      $urlRouterProvider.otherwise('/');

      $stateProvider
        .state('landing', {
          url: '/',
          controller: 'LandingController',
          templateUrl: 'app/modules/landing-page/main/landing-main.html'
        });
      }]);
})();
