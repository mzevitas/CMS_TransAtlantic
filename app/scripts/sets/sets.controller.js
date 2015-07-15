;(function (){

  'use strict';

  angular.module('app')
    .controller('SetCtrl', ['$scope', '$http', '$state', 'PARSE', 'SetsFactory','$stateParams', '$cacheFactory',
    function ($scope, $http, $state, PARSE, SetsFactory, $stateParams, $cacheFactory){

       var cache = $cacheFactory.get('$http');

      // $scope.gigs = [];

      SetsFactory.get().success( function (response) {
        $scope.sets = response.results;
      });
    

      $scope.addSet = function (setObj) {
        $scope.gigs = {};
        SetsFactory.add(setObj).success( function (results) {
          setObj.objectId = results.objectId;
          // $scope.events.push(eventObj);
          cache.remove(PARSE.URL + 'classes/sets');
          

        });
      };

//       $scope.editGig = function (id, index) {
//         GigFactory.edit(id).sucess( function(){

//           $state.go('portal');
// }
//           )};

      $scope.deleteMe = function (id, index) {
        SetsFactory.del(id).success( function (response) {
          $scope.sets.splice(index, 1);
          cache.remove(PARSE.URL + 'classes/sets');
        });
      };


     
    


    }]);
}());