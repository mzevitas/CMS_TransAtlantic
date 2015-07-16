;(function() {

  'use strict';

    angular.module('app')
        .factory('VenueFactory', ['$http', '$state', 'PARSE', '$cookies', 
            function($http, $state, PARSE, $cookies) {


                // var user = UserFactory.user();

        var getVenue = function() {
            return $http.get(PARSE.URL + 'classes/venues', PARSE.CONFIG);

        };

        var addVenue = function(venueObj) {
            return $http.post(PARSE.URL + 'classes/venues', venueObj, PARSE.CONFIG)
                .success(function() {
                    $state.go('portal.venueList');

                });
        };

                var getSingle = function(id) {
                  return $http.get(PARSE.URL + 'classes/venues/' + id, PARSE.CONFIG)
                };

                 var editVenue = function(id) {
                    var end = PARSE.URL + 'classes/venues/' + id.objectId;
                  return $http.put(end, id, PARSE.CONFIG);

                 };

                var deleteVenues = function(id) {
                    return $http.delete(PARSE.URL + 'classes/venues/' + id, PARSE.CONFIG).success(function(){
                        $state.go('portal.venueList');
                    });
                };

                return {
                    get: getVenue,
                    add: addVenue,
                    edit: editVenue,
                    del: deleteVenues,
                    getSingle : getSingle 

                };

            }
        ]);
}());