;( function(){

  'use strict';

angular.module('app')

.controller('EditSongCtrl', ['$scope', '$state',
 '$stateParams', 'SongsFactory',
 function ($scope, $state, $stateParams, SongsFactory) {

  var id = $stateParams.id;

  SongsFactory.getSingle(id).success( function(data){

    $scope.so = data;


  });

  $scope.editSong = function(song){

   SongsFactory.edit(song).success( function(){

      $state.go('portal.songList');

    });

  };

}])


}());