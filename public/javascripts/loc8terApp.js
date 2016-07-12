/**
*  Module
*
* Description
*/

// Angular Custom Filter Code
var _isNumeric = function (n) {
	return !isNAN(parseFloat(n)) && isFinite(n);
};

var formatDistance = function () {
	return function (distance) {
		var numDistance, unit;
		if (distance) {
			if (distance > 1) {
				numDistance = parseFloat(distance).toFixed(1);
				unit = 'km';
			} else {
				numDistance = parseInt(distance * 1000, 10);
				unit = 'm';
			}
			return numDistance + unit;
		} else {
			return '?';
		};
	};
};

var ratingStars = function () {
	return {
		scope: {
			thisRating: '=rating'
		},
		templateUrl: '/javascripts/rating-stars.html' 
	};
};

var loc8rData = function ($http) {
	var locationByCoords = function (lat, lng) {
		return $http.get('/api/locations?lng=' + lng + '&lat=' + lat + '&maxDistance=20000');
	};
	return {
		locationByCoords : locationByCoords
	};
};

var geolocation = function () {
	var getPosition = function (cbSuccess, cbError, cbNoGeo) {
		if (navigator.geolocation) {
			navigator.geolocation.getCurrentPosition(cbSuccess, cbError);
		} else {
			cbNoGeo();
		}
	};
	return {
		//This returns the get position function so it can be invoked from a controller.
		getPosition : getPosition
	};
};

//Setting up the app
var myApp = angular.module('loc8rApp',[]);

//The controller 
myApp.controller('locationListCtrl', function($scope, loc8rData, geolocation) {

	$scope.message = 'Checking your location';
	
	$scope.getData = function (position) {
		var lat = position.coords.latitude,
			lng = position.coords.longitude;
		$scope.message = 'Searching for nearby places';
			loc8rData.locationByCoords(lat, lng)
				.success(function(data){
					$scope.message = data.length > 0 ? '' : 'No locations found';
					$scope.data = { locations: data };
				})
				.error(function (e) {
					$scope.message = 'Sorry, something has gone wrong';
				});
	};

	$scope.showError = function (error) {
		$scope.$apply(function() {
			$scope.message = error.message;
		});
	};

	$scope.noGeo = function () {
		$scope.apply(function() {
			$scope.message = 'Geolocation is not supported by this browser.';
		});
	};

	geolocation.getPosition($scope.getData, $scope.showError, $scope.noGeo);

}); //Controller ends




//Our custom filter
myApp.filter('formatDistance', formatDistance);

//Our custom directive
myApp.directive('ratingStars', ratingStars);

//Our custom service
myApp.service('loc8rData', loc8rData);

//Our Geolocation service
myApp.service('geolocation', geolocation);


