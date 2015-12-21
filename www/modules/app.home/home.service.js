(function (module) {
  'use strict';

  var URL = 'http://www.omdbapi.com/';

  function SeriesService($http) {
    var service = this;

    service.getSeries = function (query) {
      return $http.jsonp(URL,{params:{s:query, type:"series", callback:"JSON_CALLBACK"}}).then(function (response) {
        return response.data;
      });
    };

  }
  module.service('serieService', [
    '$http',
    SeriesService
  ]);

}(angular.module('app.home')));