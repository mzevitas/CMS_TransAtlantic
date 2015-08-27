;( function(){

  'use strict';

angular.module('app')

.controller('EditSetCtrl', ['$scope', '$state',
 '$stateParams', 'SetsFactory',
 function ($scope, $state, $stateParams, SetsFactory) {

  var id = $stateParams.id;

  SetsFactory.getSingle(id).success( function(data){

    $scope.s = data;


  });

  $scope.editSet = function(set){

   SetsFactory.edit(set).success( function(){

      $state.go('portal.sets');

    });

  };

}])


}());