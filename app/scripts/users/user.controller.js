;(function (){
  
  'use strict';

  angular.module('app', ['ngCookies'])

  .controller('UserCtrl', ['$scope', 'UserFactory', '$cookies', '$state', 

    function ($scope, UserFactory, $cookies, $state) {

     
      // Add a new user
      $scope.registerUser = function (userObj) {
        UserFactory.register(userObj);
      };

      // Login Method
      $scope.loginUser = function (userObj) {
        UserFactory.login(userObj);
      };
    
    }

  ])

   .directive('logOut', function (UserFactory) {
      return {
        link: function ($scope, element, attrs) {
          element.bind('click', function () {
            UserFactory.logout();
          });
        }
      }
    })

   .directive('logIn', [ function () {
     return {
       restrict: 'EA',

       templateUrl: 'views/login.tpl.html' 

         };

   }]);
   


}());