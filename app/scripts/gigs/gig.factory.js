;(function() {

	'use strict';

    angular.module('app')
        .factory('GigFactory', ['$http', '$state', 'PARSE', '$cookies', 
            function($http, $state, PARSE, $cookies) {


                // var user = UserFactory.user();

        var getGig = function() {
            return $http.get(PARSE.URL + 'classes/gigs', PARSE.CONFIG);

        };

        var addGig = function(gigObj) {
            return $http.post(PARSE.URL + 'classes/gigs', gigObj, PARSE.CONFIG)
                .success(function() {
                    $state.go('portal.gigList');

                });
        };

                var getSingle = function(id) {
                	return $http.get(PARSE.URL + 'classes/gigs/' + id, PARSE.CONFIG)
                };

                 var editGig = function(id) {
                    var end = PARSE.URL + 'classes/gigs/' + id.objectId;
                 	return $http.put(end, id, PARSE.CONFIG);

                 };

                var deleteGigs = function(id) {
                    return $http.delete(PARSE.URL + 'classes/gigs/' + id, PARSE.CONFIG).success(function(){
                        $state.go('portal.gigList');
                    });
                };

                return {
                    get: getGig,
                    add: addGig,
                    edit: editGig,
                    del: deleteGigs,
                    getSingle : getSingle 

                };

            }
        ]);
}());