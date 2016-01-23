;(function (){
	'use strict';

    angular.module('app')
        .controller('SingleCtrl', ['$scope', '$http', 'BlogFactory', '$stateParams',

    function ($scope, $http, BlogFactory, $stateParams) {




                BlogFactory.getSingle($stateParams.id).success(function (data) {
                    $scope.b = data;

                });

        //console.log("hellosingle");


            }]);
}());
