var app = angular.module('app', ['ngRoute']);
app.config(function($routeProvider){
	$routeProvider
		.when('/', {templateUrl: 'partials/portfolio.html', controller: 'DataCtrl'})
		.when('/home', {templateUrl: 'partials/home.html', controller: 'DataCtrl'})
		.otherwise({redirectTo : '/'});
});