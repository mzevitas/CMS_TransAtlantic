;(function() {

	'use strict';

    angular.module('app')
        .factory('MailFactory', ['$http', '$state', 'PARSE',  
            function($http, $state, PARSE) {



        var getMail = function() {
            return $http.get(PARSE.URL + 'classes/mail', PARSE.CONFIG);

        };

                return {
                    get: getMail,
                    

                };

            }
        ]);
}());