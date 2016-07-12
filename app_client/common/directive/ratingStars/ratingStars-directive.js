// Rating Stars Directive
(function(){
	angular
	 .module('loc8rApp')
	 .directive('ratingStars', ratingStars); 

	function ratingStars () {
		return {
			restrict: 'EA',
			scope: {
				thisRating: '=rating'
			},
			templateUrl: 'common/directive/ratingStars/ratingStars-template.html' 
		};


	}
}()); // Crockford recommends this one

//   angular
//     .module('loc8rApp')
//     .directive('ratingStars', ratingStars);

//   function ratingStars () {
//     return {
//       restrict: 'EA',
//       scope: {
//         thisRating : '=rating'
//       },
//       templateUrl: '/common/directives/ratingStars/ratingStars-template.html'
//     };
// }