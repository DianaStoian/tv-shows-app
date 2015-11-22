(function (module) {
  'use strict';

  var URL = 'http://series-ortiz.rhcloud.com/series';

  function SeriesService($http) {
    var service = this;

    service.getSeries = function (query) {
      return $http.jsonp(URL,{params:{name:query, s:"thetvdb", callback:"JSON_CALLBACK"}}).then(function (response) {
        return response.data;
      });
    };

  }
  module.service('serieService', [
    '$http',
    SeriesService
  ]);

}(angular.module('app.home')));