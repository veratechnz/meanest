(function(){

 angular
 	.module('loc8terApp')
 	.controller('aboutCtrl', aboutCtrl);

 function aboutCtrl(){
 	var vm = this;

 	vm.pageHeader = {
 		title: 'About Loc8ter'
 	};
 	vm.main = {
 		content: 'Loc8ter was created to help people find places to sit down and get a bit of..... \n\n Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere minima vitae harum recusandae voluptatem! Sed non quas perspiciatis, delectus autem blanditiis libero ab, inventore, illo velit dicta. Adipisci, corporis, accusamus.'
 	};
 }
}());