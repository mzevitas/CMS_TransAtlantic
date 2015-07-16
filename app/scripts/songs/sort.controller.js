;(function (){

  'use strict';

  angular.module('app')
.controller('SortCtrl', ['$scope', '$filter','SongsFactory', function($scope, $filter, SongsFactory) {
  var orderBy = $filter('orderBy');
  $scope.so = results;
    
  $scope.order = function(predicate, reverse) {
    $scope.friends = orderBy($scope.friends, predicate, reverse);
  };
  $scope.order('-age',false);
}]);

     
    


}());