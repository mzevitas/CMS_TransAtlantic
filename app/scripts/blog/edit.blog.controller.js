;( function(){

  'use strict';

angular.module('app')

.controller('EditCtrl', ['$scope', '$state',
 '$stateParams', 'BlogFactory',
 function ($scope, $state, $stateParams, BlogFactory) {

  var id = $stateParams.id;

  BlogFactory.getSingle(id).success( function(data){

    $scope.b = data;


  });

  $scope.editBlog = function(blog){

   BlogFactory.edit(blog).success( function(){

      $state.go('portal.blogList');

    });

  };

}])


}());