;(function (){

  'use strict';

  angular.module('app')
    .controller('BlogCtrl', ['$scope', '$http', '$state', 'PARSE', 'BlogFactory','$stateParams', '$cacheFactory', '$window', '$filter',
    function ($scope, $http, $state, PARSE, BlogFactory, $stateParams, $cacheFactory, $window, $filter){

       var cache = $cacheFactory.get('$http');

      // $scope.blogs = [];

      BlogFactory.get().success( function (response) {
        $scope.blogs = response.results;
      });
    

      $scope.addBlog = function (blogObj) {
        $scope.blogs = {};
        BlogFactory.add(blogObj).success( function (results) {
          blogObj.objectId = results.objectId;
          // $scope.events.push(eventObj);
          cache.remove(PARSE.URL + 'classes/blogs');
          

        });
      };

    var orderBy = $filter('orderBy');
      $scope.predicate = 'serialnumber';
      $scope.reverse = false;
      $scope.order = function(predicate) {
        $scope.reverse = ($scope.predicate === predicate) ? !$scope.reverse : false;
        $scope.predicate = predicate;
      };

      $scope.deleteMe = function(id) {
      var deleteVenue = $window.confirm('Are you sure you want to delete?');
      if (deleteVenue) {
        BlogFactory.del(id).success( function (response) {
          cache.remove(PARSE.URL + 'classes/blogs');
          // $state.reload();
        });
    }
  };


     
    


    }]);
}());