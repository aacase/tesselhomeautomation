// Declare app level module which depends on filters, and services
angular.module('MakerHome', ['ngResource', 'ngRoute', 'ui.bootstrap', 'ui.date', 'firebase'])
  .config(['$routeProvider', function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/home/home.html', 
        controller: 'HomeController'})
      .when('/items', {
        templateUrl: 'views/items/items.html', 
        controller: 'ItemsController'})
      .otherwise({redirectTo: '/'});
  }]);
