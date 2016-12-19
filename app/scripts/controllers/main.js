'use strict';

angular.module('jbApp')
  .controller('MainCtrl', ['$scope', 'StoryService', '$routeParams', function ($scope, StoryService, $routeParams) {

  	var id = $routeParams.id || 'start';

  	if (!StoryService.hasOwnProperty(id)){
  		$scope.data = {};
  		$scope.data.story = ['Mistakes have been made!  :('];
  		$scope.data.routes = null;
  	} else {
  		$scope.data = StoryService[id];
	}

	angular.forEach(StoryService, function(value){
		angular.forEach(value.routes, function(route){
			if(!StoryService.hasOwnProperty(route.to)){
				console.log('Can\'t find ' + route.to);
			}
		});
	});

}]);
