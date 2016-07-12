//Setting up the app
var myApp = angular.module('loc8rApp', ['ngRoute']);

function config ($routeProvider) {
	$routeProvider
		.when('/', {
			templateUrl: 'home/home.view.html',
			controller: 'homeCtrl',
			controllerAs: 'vm'
		})
		.otherwise({redirectTo: '/'})
}

myApp
	.config(['$routeProvider', config]);

