;(function() {

  'use strict';

    angular.module('app')
        .factory('AboutFactory', ['$http', '$state', 'PARSE', '$cookies', 
            function($http, $state, PARSE, $cookies) {


                // var user = UserFactory.user();

        var getAbout = function() {
            return $http.get(PARSE.URL + 'classes/about', PARSE.CONFIG);

        };

        var addAbout = function(aboutObj) {
            return $http.post(PARSE.URL + 'classes/about', aboutObj, PARSE.CONFIG)
                .success(function() {
                    $state.go('portal.aboutList');

                });
        };

                var getSingleAbout = function(id) {
                  return $http.get(PARSE.URL + 'classes/about/' + id, PARSE.CONFIG)
                };

                 var editAbout = function(id) {
                    var end = PARSE.URL + 'classes/about/' + id.objectId;
                    return $http.put(end, id, PARSE.CONFIG);

                 };
                var deleteAbouts = function(id) {
                    return $http.delete(PARSE.URL + 'classes/about/' + id, PARSE.CONFIG).success(function(){
                        $state.go('portal.aboutPage');
                    });
                };

                return {
                    get: getAbout,
                    add: addAbout,
                    edit: editAbout,
                    del: deleteAbouts,
                    getSingle : getSingleAbout    

                };

            }
        ]);
}());