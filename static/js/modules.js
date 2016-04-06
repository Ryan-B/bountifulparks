var app = angular.module('app', ['ngRoute']);

app.config(function($routeProvider){
	$routeProvider
	.when('/', {
		controller: 'HomeController',
		controllerAs: 'homeCtrl',
		templateUrl: '/partials/frontpage.partial.html'
	})

	.when('/discover', {
		controller: 'ProductsController',
		controllerAs: 'productsCtrl',
		templateUrl: '/partials/discover.partial.html'
	})
	.when('/celebrate', {
		controller: 'UsersController',
		controllerAs: 'usersCtrl',
		templateUrl: '/partials/celebrate.partial.html'
	})
	.when('/support', {
		controller: 'ProductsController',
		controllerAs: 'productsCtrl',
		templateUrl: '/partials/support.partial.html'
	})
});