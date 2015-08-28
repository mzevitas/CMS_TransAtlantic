;(function() {

  'use strict';

    angular.module('app')
        .factory('MediaFactory', ['$http', '$state', 'PARSE', '$cookies', 
            function($http, $state, PARSE, $cookies) {


                // var user = UserFactory.user();

        var getMedia = function() {
            return $http.get(PARSE.URL + 'classes/media', PARSE.CONFIG);

        };

        var addMedia = function(mediaObj) {
            return $http.post(PARSE.URL + 'classes/media', mediaObj, PARSE.CONFIG)
                .success(function() {
                    $state.go('portal.media');

                });
        };

                var getSingleMedia = function(id) {
                  return $http.get(PARSE.URL + 'classes/media/' + id, PARSE.CONFIG)
                };

                 var editMedia = function(id) {
                    var end = PARSE.URL + 'classes/media/' + id.objectId;
                    return $http.put(end, id, PARSE.CONFIG);

                 };
                var deleteMedia = function(id) {
                    return $http.delete(PARSE.URL + 'classes/media/' + id, PARSE.CONFIG).success(function(){
                        $state.go('portal.media');
                    });
                };

                return {
                    get: getMedia,
                    add: addMedia,
                    edit: editMedia,
                    del: deleteMedia,
                    getSingle : getSingleMedia    

                };

            }
        ]);
}());