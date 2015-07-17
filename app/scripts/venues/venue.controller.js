;(function (){

  'use strict';

  angular.module('app')
    .controller('VenueCtrl', ['$scope', '$http', '$state', 'PARSE', 'VenueFactory','$stateParams', '$cacheFactory',
    function ($scope, $http, $state, PARSE, VenueFactory, $stateParams, $cacheFactory){

       var cache = $cacheFactory.get('$http');



      VenueFactory.get().success( function (response) {
        $scope.venues = response.results;
      });
    

      $scope.addVenue = function (venueObj) {
        $scope.venues = {};
        VenueFactory.add(venueObj).success( function (results) {
          venueObj.objectId = results.objectId;
          cache.remove(PARSE.URL + 'classes/venues');
          

        });
      };


      $scope.deleteMe = function (id, index) {
        VenueFactory.del(id).success( function (response) {
          $scope.venues.splice(index, 1);
          cache.remove(PARSE.URL + 'classes/venues');
        });
      };


     
    


    }]);
}());