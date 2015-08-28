;(function() {

	'use strict';

    angular.module('app')
        .factory('MailFactory', ['$http', '$state', 'PARSE',  
            function($http, $state, PARSE) {



        var getMail = function() {
            return $http.get(PARSE.URL + 'classes/mail', PARSE.CONFIG);

        };

           var deleteMail = function(id) {
                    return $http.delete(PARSE.URL + 'classes/mail/' + id, PARSE.CONFIG).success(function(){
                        $state.go('portal.mailing');
                    });
                };

                return {
                    get: getMail,
                    del: deleteMail
                    

                };

            }
        ]);
}());