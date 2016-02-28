var app = angular.module('app', ['ngRoute']);

app.config(function($routeProvider){
	$routeProvider
	.when('/', {
		controller: 'ProductsController',
		controllerAs: 'productsCtrl',
		templateUrl: '/'
	})

	.when('/products', {
		controller: 'ProductsController',
		controllerAs: 'productsCtrl',
		templateUrl: '/index.html'
	})
});