//Setting up the app
(function(){
	var myApp = angular.module('loc8rApp', ['ngRoute']);

	function config ($routeProvider, $locationProvider) {
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
}());



