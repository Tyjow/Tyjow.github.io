var app = angular.module('app', ['ngRoute']);
app.config(function($routeProvider){
	$routeProvider
		.when('/', {templateUrl: 'partials/home.html', controller: 'DataCtrl'})
		.when('/about', {templateUrl: 'partials/about.html', controller: 'DataCtrl'})
		.when('/portfolio', {templateUrl: 'partials/portfolio.html', controller: 'DataCtrl'})
		.when('/game', {templateUrl: 'partials/game.html', controller: 'DataCtrl'})
		.when('/contact', {templateUrl: 'partials/contact.html', controller: 'DataCtrl'})
		.otherwise({redirectTo : '/'});
});