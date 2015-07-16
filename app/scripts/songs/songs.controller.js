;(function (){

  'use strict';

  angular.module('app')
    .controller('SongCtrl', ['$scope', '$http', '$state', 'PARSE', 'SongsFactory','$stateParams', '$cacheFactory',
    function ($scope, $http, $state, PARSE, SongsFactory, $stateParams, $cacheFactory){

       var cache = $cacheFactory.get('$http');

      // $scope.gigs = [];

      SongsFactory.get().success( function (response) {
        $scope.songs = response.results;
      });
    

      $scope.addSong = function (songObj) {
        $scope.songs = {};
        SongsFactory.add(songObj).success( function (results) {
          songObj.objectId = results.objectId;
          // $scope.events.push(eventObj);
          cache.remove(PARSE.URL + 'classes/songs');
          

        });
      };

//       $scope.editGig = function (id, index) {
//         GigFactory.edit(id).sucess( function(){

//           $state.go('portal');
// }
//           )};

      $scope.deleteMe = function (id, index) {
        SongsFactory.del(id).success( function (response) {
          $scope.songs.splice(index, 1);
          cache.remove(PARSE.URL + 'classes/songs');
        });
      };


     
    


    }]);
}());