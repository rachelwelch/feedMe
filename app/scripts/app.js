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
    // .state('price', {
    //   url: '/priceRange',
    //   templateUrl: 'views/price.html'
    // })
    // .state('enviro', {
    //   url: '/environment',
    //   templateUrl: 'views/enviro.html'
    // })

})