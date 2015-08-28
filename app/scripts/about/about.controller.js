;(function (){

  'use strict';

  angular.module('app')
    .controller('AboutCtrl', ['$scope', '$http', '$state', 'PARSE', 'AboutFactory','$stateParams', '$cacheFactory', '$filter', '$window',
    function ($scope, $http, $state, PARSE, AboutFactory, $stateParams, $cacheFactory, $filter, $window){

       var cache = $cacheFactory.get('$http');



      AboutFactory.get().success( function (response) {
        $scope.abouts = response.results;
      });
    

      $scope.addAbout = function (venueObj) {
        $scope.abouts = {};
        AboutFactory.add(aboutObj).success( function (results) {
          aboutObj.objectId = results.objectId;
          cache.remove(PARSE.URL + 'classes/about');
          

        });
      };



      $scope.deleteMe = function(id) {
      var deleteAbout = $window.confirm('Are you sure you want to delete?');
      if (deleteAbout) {
        AboutFactory.del(id).success( function (response) {
          cache.remove(PARSE.URL + 'classes/about');
          $state.reload();
        });
    }
  };


     
    


    }]);
}());