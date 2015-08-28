;( function(){

  'use strict';

angular.module('app')

.controller('EditAboutCtrl', ['$scope', '$state',
 '$stateParams', 'AboutFactory',
 function ($scope, $state, $stateParams, AboutFactory) {

  var id = $stateParams.id;

  AboutFactory.getSingle(id).success( function(data){

    $scope.a = data;




  });

  $scope.editAbout = function(about){

   AboutFactory.edit(about).success( function(){

      $state.go('portal.about');

    });

  };

}])


}());