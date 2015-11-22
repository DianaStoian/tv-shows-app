(function (module) {
  'use strict';

  var URL = 'http://series-ortiz.rhcloud.com/series/';

  function SeriesDetailsService($http) {
    var service = this;

    service.getSeriesDetails = function (serieId) {
      return $http.jsonp(URL + serieId,{params:{s:"thetvdb", callback:"JSON_CALLBACK"}}).then(function (response) {
        return response.data;
      });
    };

  }
  module.service('seriesDetailsService', [
    '$http',
    SeriesDetailsService
  ]);

}(angular.module('app.home')));