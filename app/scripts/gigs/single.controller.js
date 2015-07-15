;(function (){
	'use strict';

    angular.module('app')
        .controller('SingleCtrl', ['$scope', '$http', 'GigFactory', '$stateParams',

    function ($scope, $http, GigFactory, $stateParams) {




                GigFactory.getSingle($stateParams.id).success(function (data) {
                    $scope.g = data;

                });

        //console.log("hellosingle");


            }]);
}());
