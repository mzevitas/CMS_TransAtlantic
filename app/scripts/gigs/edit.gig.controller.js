;( function(){

  'use strict';

angular.module('app')

.controller('EditCtrl', ['$scope', '$state',
 '$stateParams', 'GigFactory',
 function ($scope, $state, $stateParams, GigFactory) {

  var id = $stateParams.id;

  GigFactory.getSingle(id).success( function(data){

    $scope.g = data;


  });

  $scope.editGig = function(gig){

   GigFactory.edit(gig).success( function(){

      $state.go('portal.gigList');

    });

  };

}])


}());