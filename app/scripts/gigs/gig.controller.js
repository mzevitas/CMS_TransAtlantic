;(function (){

  'use strict';

  angular.module('app')
    .controller('GigCtrl', ['$scope', '$http', '$state', 'PARSE', 'GigFactory','$stateParams', '$cacheFactory', '$window', '$filter',
    function ($scope, $http, $state, PARSE, GigFactory, $stateParams, $cacheFactory, $window, $filter){

       var cache = $cacheFactory.get('$http');

      // $scope.gigs = [];

      GigFactory.get().success( function (response) {
        $scope.gigs = response.results;
      });
    

      $scope.addGig = function (gigObj) {
        $scope.gigs = {};
        GigFactory.add(gigObj).success( function (results) {
          gigObj.objectId = results.objectId;
          // $scope.events.push(eventObj);
          cache.remove(PARSE.URL + 'classes/gigs');
          

        });
      };

    var orderBy = $filter('orderBy');
      $scope.predicate = 'serialnumber';
      $scope.reverse = false;
      $scope.order = function(predicate) {
        $scope.reverse = ($scope.predicate === predicate) ? !$scope.reverse : false;
        $scope.predicate = predicate;
      };

      $scope.deleteMe = function(id) {
      var deleteVenue = $window.confirm('Are you sure you want to delete?');
      if (deleteVenue) {
        GigFactory.del(id).success( function (response) {
          cache.remove(PARSE.URL + 'classes/gigs');
          // $state.reload();
        });
    }
  };


     
    


    }]);
}());