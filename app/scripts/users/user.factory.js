;(function (){
  
  'use strict';

  angular.module('UserModule', ['ngCookies'])

  .factory('UserFactory', ['$http', 'PARSE', '$cookies', '$state',

    function ($http, PARSE, $cookies, $state) {


    var _routeUser = function (st) {
          if(st === undefined) {
            // route to Login Page
            $state.go('login');
          } else if($state.go() === 'login') {
            // route to Home Page
            $state.go('portal');
          }
        };


      // Get Current User
      var currentUser = function (data) {
         $cookies.put('sessionToken', data.sessionToken);
          $cookies.put('userObjectId', data.objectId);
      };

      // Check User Status
      var checkLoginStatus = function (st) {
        // var user = currentUser();
        if (st !== undefined) {
          PARSE.CONFIG.headers['X-PARSE-Session-Token'] = st;

        }

      };

      var checkuser = function(data) {
        var st = $cookies.get('sessionToken');
        checkLoginStatus(st);
      };

      // Add a new User
      var addUser = function (userObj) {
        $http.post(PARSE.URL + 'users', userObj, PARSE.CONFIG)
          .then( function (res) { 
            console.log(res);
            $state.go('login');

          }
        );
      };

      // Log in a User
      var loginUser = function (userObj) {

        $http ({
          method: 'GET',
          url: PARSE.URL + 'login',
          headers: PARSE.CONFIG.headers,
          params: userObj
        }).success (function (res) {
          // console.log(res);

          currentUser(res);
          $state.go('portal');
      

        });
        
      };

      // Logout Method
      var logoutUser = function () {
        $cookies.remove('sessionToken');
        $cookies.remove('userObjectId');
        $state.go('login');
      } 
  
      return {
        register : addUser, 
        login : loginUser,
        user : currentUser,
        status : checkLoginStatus,
        logout : logoutUser,
        checkuser : checkuser
      };

    }

  ]);

}());