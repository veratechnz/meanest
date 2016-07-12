// Format Distance Filter

(function(){  
	angular
	 .module('loc8rApp')
	 .filter('formatDistance', formatDistance)

	var _isNumeric = function (n) {
		return !isNAN(parseFloat(n)) && isFinite(n);
	};

	function formatDistance () {
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
}())
