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

var myApp = angular.module('loc8rApp',[]);

myApp.controller('locationListCtrl', function($scope) {
		$scope.data = {
		locations: [{
		name: 'Burger Queen',
		address: '125 High Street, Reading, RG6 1PS',
		rating: 1,
		facilities: ['Hot drinks', 'Food', 'Premium wifi'],
		distance: '0.296456',
		_id: '5370a35f2536f6785f8dfb6a'
	},{
		name: 'Costy',
		address: '125 High Street, Reading, RG6 1PS',
		rating: 5,
		facilities: ['Hot drinks', 'Food', 'Alcoholic drinks'],
		distance: '0.7865456',
		_id: '5370a35f2536f6785f8dfb6a'
	}]};
});

myApp.filter('formatDistance', formatDistance).directive('ratingStars', ratingStars);
