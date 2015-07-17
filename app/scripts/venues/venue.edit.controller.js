;( function(){

  'use strict';

angular.module('app')

.controller('EditVenueCtrl', ['$scope', '$state',
 '$stateParams', 'VenueFactory',
 function ($scope, $state, $stateParams, VenueFactory) {

  var id = $stateParams.id;

  VenueFactory.getSingle(id).success( function(data){

    $scope.v = data;




  });

  $scope.editVenue = function(venue){

   VenueFactory.edit(venue).success( function(){

      $state.go('portal.venueList');

    });

  };

}])


}());