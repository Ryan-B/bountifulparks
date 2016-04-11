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
		controller: 'ProductsController',
		controllerAs: 'productsCtrl',
		templateUrl: '/partials/celebrate.partial.html'
	})
	.when('/register', {
		controller: 'UsersController',
		controllerAs: 'usersCtrl',
		templateUrl: '/partials/register.partial.html'
	})
	.when('/support', {
		controller: 'ProductsController',
		controllerAs: 'productsCtrl',
		templateUrl: '/partials/support.partial.html'
	})
	.when('/about', {
		controller: 'ProductsController',
		controllerAs: 'productsCtrl',
		templateUrl: '/partials/about.partial.html'
	})
	.when('/person_ofthe_month', {
		controller: 'ProductsController',
		controllerAs: 'productsCtrl',
		templateUrl: '/partials/person_ofthe_month.partial.html'
	})
	.when('/places', {
		controller: 'ProductsController',
		controllerAs: 'productsCtrl',
		templateUrl: '/partials/places.partial.html'
	})

});