(function (module) {
  'use strict';

  function seasonDetailsController($scope, $state) {

	$scope.season = $state.params.season;
  }
  module.controller('seasonDetailsController', [
    '$scope',
	'$state',
    seasonDetailsController
  ]);

}(angular.module('app.home')));