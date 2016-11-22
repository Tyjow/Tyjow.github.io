var app = angular.module('app', ['ngRoute']);
app.config(function($routeProvider){
	$routeProvider
		.when('/', {templateUrl: 'partials/home.html', controller: 'DataCtrl'})
		.when('/portfolio', {templateUrl: 'partials/portfolio.html', controller: 'DataCtrl'})
		.otherwise({redirectTo : '/'});
});