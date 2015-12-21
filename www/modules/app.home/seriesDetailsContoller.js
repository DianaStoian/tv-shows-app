(function (module) {
  'use strict';

  function serieDetailsController($scope, seriesDetailsService, $state) {
	var controller = this;
	
	seriesDetailsService.getSeriesDetails($state.params.serieId).then(function (seriesDetails) {
        $scope.whichSerie = seriesDetails;
      });
	 
	  controller.viewEpisodes = function(season){
		$state.go('seasonDetails' , { season : season});
	}
  }
  module.controller('serieDetailsController', [
    '$scope',
    'seriesDetailsService',
	'$state',
    serieDetailsController
  ]);

}(angular.module('app.home')));