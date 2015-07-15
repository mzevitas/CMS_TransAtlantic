;(function (){
	'use strict';

    angular.module('app')
        .controller('SingleSetCtrl', ['$scope', '$http', 'SetsFactory', '$stateParams',

    function ($scope, $http, SetsFactory, $stateParams) {




                SetsFactory.getSingle($stateParams.id).success(function (data) {
                    $scope.s = data;

                });

        //console.log("hellosingle");


            }]);
}());
