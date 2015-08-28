;(function (){

  'use strict';

  angular.module('app')
    .controller('MediaCtrl', ['$scope', '$http', '$state', 'PARSE', 'MediaFactory','$stateParams', '$cacheFactory', '$filter', '$window',
    function ($scope, $http, $state, PARSE, MediaFactory, $stateParams, $cacheFactory, $filter, $window){

       var cache = $cacheFactory.get('$http');



      MediaFactory.get().success( function (response) {
        $scope.medias = response.results;
      });
    

      $scope.addMedia = function (mediaObj) {
        $scope.medias = {};
        MediaFactory.add(mediaObj).success( function (results) {
          mediaObj.objectId = results.objectId;
          cache.remove(PARSE.URL + 'classes/media');
          

        });
      };


      $scope.deleteMe = function(id) {
      var deleteMedia = $window.confirm('Are you sure you want to delete?');
      if (deleteMedia) {
        MediaFactory.del(id).success( function (response) {
          cache.remove(PARSE.URL + 'classes/media');
          $state.reload();
        });
    }
  };


     
    


    }]);
}());