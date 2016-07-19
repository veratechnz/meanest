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
			.when('/about', {
				templateUrl: 'common/views/genericText-view.html',
				controller: 'aboutCtrl',
				controllerAs: 'vm'
			})
			.otherwise({redirectTo: '/'});
		$locationProvider.html5Mode({enabled: true, requireBase: false});
	}

	myApp
		.config(['$routeProvider', '$locationProvider', config]);
}());



