'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
  'ui.router',
  'myApp.landing'
]).config(['$locationProvider', function($locationProvider) {
  $locationProvider.html5Mode(true);
}]);
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
(function() {
  'use strict';
  angular
    .module('directorioApp.landing')
    .controller('LandingController', ['$scope', function ($scope) {
      console.log('controller');
    }]);
})();
