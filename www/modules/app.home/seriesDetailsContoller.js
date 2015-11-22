(function (module) {
  'use strict';

  function serieDetailsController($scope, seriesDetailsService, $state) {

	seriesDetailsService.getSeriesDetails($state.params.serieId).then(function (seriesDetails) {
        $scope.whichSerie = seriesDetails;
      });
  }
  module.controller('serieDetailsController', [
    '$scope',
    'seriesDetailsService',
	'$state',
    serieDetailsController
  ]);

}(angular.module('app.home')));