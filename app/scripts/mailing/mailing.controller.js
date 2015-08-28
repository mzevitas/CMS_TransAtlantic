;(function (){

  'use strict';

  angular.module('app')
    .controller('MailCtrl', ['$scope', '$http', '$state', 'PARSE', 'MailFactory', '$window',
    function ($scope, $http, $state, PARSE, MailFactory, $window){


      MailFactory.get().success( function (response) {
        $scope.mails = response.results;
      });


      $scope.deleteMe = function(id) {
      var deleteMail = $window.confirm('Are you sure you want to delete?');
      if (deleteMail) {
        MailFactory.del(id).success( function (response) {
          cache.remove(PARSE.URL + 'classes/mail');
          $state.reload();
        });
    }
  };

    }]);
}());