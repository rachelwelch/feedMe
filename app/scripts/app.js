var app = angular.module('foodApp', ['ui.router'])

.config(function($stateProvider, $urlRouterProvider) {

	$urlRouterProvider.otherwise('index.html');

	$stateProvider
    .state('main', {
      url: '/index.html',
      templateUrl: 'views/main.html',
      controller: 'mainController'
    })
    .state('zipCode', {
      url: '/location',
      templateUrl: 'views/zipCode.html',
      controller: 'mainController'
    })
    .state('price', {
      url: '/price',
      templateUrl: 'views/price.html'
    })
    .state('finish', {
      url: '/finishLine',
      templateUrl: 'views/finish.html'
    })
    .state('results', {
      url: '/results',
      templateUrl: 'views/results.html'
    })

})