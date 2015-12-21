(function (module) {
  'use strict';

  var URL = 'http://www.omdbapi.com/';

  function SeriesDetailsService($http) {
    var service = this;

    service.getSeriesDetails = function (serieId) {
      return $http.jsonp(URL,{params:{i:serieId, callback:"JSON_CALLBACK"}}).then(function (response) {
        return response.data;
      });
    };

  }
  module.service('seriesDetailsService', [
    '$http',
    SeriesDetailsService
  ]);

}(angular.module('app.home')));