;(function (){

  'use strict';

  angular.module('app')
    .controller('MailCtrl', ['$scope', '$http', '$state', 'PARSE', 'MailFactory',
    function ($scope, $http, $state, PARSE, MailFactory){


      MailFactory.get().success( function (response) {
        $scope.mails = response.results;
      });


    }]);
}());