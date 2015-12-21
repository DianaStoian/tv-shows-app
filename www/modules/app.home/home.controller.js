(function (module) {
  'use strict';

  function SeriesController($scope,serieService, $state) {
    $scope.series = [];
    $scope.search = {string : ''};
	$scope.firstTime = false;
    var controller = this;

    controller.getShows = function(){
      serieService.getSeries($scope.search.string).then(function (result) {
        $scope.series = result.Search;
		$scope.firstTime = true;
      });
    }
	
	controller.viewSerie = function(serie){
		$state.go('serieDetails' , { serieId : serie.imdbID});
	}
	
	controller.loadMore = function (){
		var newItem = new Object();
		newItem.name = "Movie";
		$scope.series.push(newItem);
	};

  }
  module.controller('serieController', [
    '$scope',
    'serieService',
	'$state',
    SeriesController
  ]);

}(angular.module('app.home')));