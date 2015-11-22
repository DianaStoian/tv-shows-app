/**
 * @module app.home
 * @memberOf app
 */

(function (module) {
  'use strict';

  /**
   * Define the module's configuration.
   * @private
   * @function config
   * @param {Object} $stateProvider - UI Router $stateProvider service.
   * @param {Object} templateUtils - Some template utilities.
   */
  function config($stateProvider, templateUtils) {
    $stateProvider.state('home', {
      url: '/home',
      views: {
        '': {
          templateUrl: templateUtils.getUrlFromModule(module),
          controller: 'serieController as controller'
        }
      }
    })
	 .state('serieDetails', {
    url:'/serieDetails/:serieId',
    templateUrl:'seriesDetails.html',
	params: {'serieId': null},
    controller:'serieDetailsController as controller'
  })
  .state('seasonDetails', {
    url:'/serieDetails/',
    templateUrl:'seasonDetails.html',
	params: {'season': null},
    controller:'seasonDetailsController as controller'
  })
  ;
  }

  module.config(['$stateProvider', 'templateUtilsProvider', config]);

}(angular.module('app.home', ['fp.utils'])));
