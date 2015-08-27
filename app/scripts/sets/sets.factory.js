;(function() {

	'use strict';

    angular.module('app')
        .factory('SetsFactory', ['$http', '$state', 'PARSE', '$cookies', 
            function($http, $state, PARSE, $cookies) {


                // var user = UserFactory.user();

        var getSet = function() {
            return $http.get(PARSE.URL + 'classes/sets', PARSE.CONFIG);

        };

        var addSet = function(setObj) {
            return $http.post(PARSE.URL + 'classes/sets', setObj, PARSE.CONFIG)
                .success(function() {
                    $state.go('portal.sets');

                });
        };

                var getSingleSet = function(id) {
                	return $http.get(PARSE.URL + 'classes/sets/' + id, PARSE.CONFIG)
                };

                 var editSet = function(id) {
                    var end = PARSE.URL + 'classes/sets/' + id.objectId;
                 	return $http.put(end, id, PARSE.CONFIG);

                 };

                var deleteSet = function(id) {
                    return $http.delete(PARSE.URL + 'classes/sets/' + id, PARSE.CONFIG).success(function(){
                        $state.go('portal.sets');
                    });
                };

                return {
                    get: getSet,
                    add: addSet,
                    edit: editSet,
                    del: deleteSet,
                    getSingle : getSingleSet 

                };

            }
        ]);
}());