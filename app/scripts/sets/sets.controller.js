;(function (){

  'use strict';

  angular.module('app')
    .controller('SetCtrl', ['$scope', '$http', '$state', 'PARSE', 'SetsFactory','$stateParams', '$cacheFactory', '$window',
    function ($scope, $http, $state, PARSE, SetsFactory, $stateParams, $cacheFactory, $window){

       var cache = $cacheFactory.get('$http');

      // $scope.gigs = [];

      SetsFactory.get().success( function (response) {
        $scope.sets = response.results;
      });
    

      $scope.addSet = function (setObj) {
        // $scope.sets = [];
        SetsFactory.add(setObj).success( function (results) {
          setObj.objectId = results.objectId;
          // $scope.sets.push(setObj);
          cache.remove(PARSE.URL + 'classes/sets');
          

        });
      };

//       $scope.editGig = function (id, index) {
//         GigFactory.edit(id).sucess( function(){

//           $state.go('portal');
// }
//           )};

      $scope.deleteMe = function(id) {
      var deleteVenue = $window.confirm('Are you sure you want to delete?');
      if (deleteVenue) {
        SetsFactory.del(id).success( function (response) {
          cache.remove(PARSE.URL + 'classes/sets');
          // $state.reload();
        });
    }
  };


     
    


    }]);
}());