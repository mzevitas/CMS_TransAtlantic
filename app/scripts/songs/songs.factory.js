;(function() {

    'use strict';

    angular.module('app')
        .factory('SongsFactory', ['$http', '$state', 'PARSE', '$cookies', 
            function($http, $state, PARSE, $cookies) {


                // var user = UserFactory.user();

        var getSong = function() {
            return $http.get(PARSE.URL + 'classes/songs', PARSE.CONFIG);

        };

        var addSong = function(songObj) {
            return $http.post(PARSE.URL + 'classes/songs', songObj, PARSE.CONFIG)
                .success(function() {
                    $state.go('portal.songList');

                });
        };

                var getSingleSong = function(id) {
                    return $http.get(PARSE.URL + 'classes/songs/' + id, PARSE.CONFIG)
                };

                 var editSong = function(id) {
                    var end = PARSE.URL + 'classes/songs/' + id.objectId;
                    return $http.put(end, id, PARSE.CONFIG);

                 };

                var deleteSong = function(id) {
                    return $http.delete(PARSE.URL + 'classes/songs/' + id, PARSE.CONFIG).success(function(){
                        $state.go('portal.songList');
                    });
                };

                return {
                    get: getSong,
                    add: addSong,
                    edit: editSong,
                    del: deleteSong,
                    getSingle : getSingleSong 

                };

            }
        ]);
}());