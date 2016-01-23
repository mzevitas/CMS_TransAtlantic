;(function() {

	'use strict';

    angular.module('app')
        .factory('BlogFactory', ['$http', '$state', 'PARSE', '$cookies', 
            function($http, $state, PARSE, $cookies) {


                // var user = UserFactory.user();

        var getBlog = function() {
            return $http.get(PARSE.URL + 'classes/blogs', PARSE.CONFIG);

        };

        var addBlog = function(blogObj) {
            return $http.post(PARSE.URL + 'classes/blogs', blogObj, PARSE.CONFIG)
                .success(function() {
                    $state.go('portal.blogList');

                });
        };

                var getSingle = function(id) {
                	return $http.get(PARSE.URL + 'classes/blogs/' + id, PARSE.CONFIG)
                };

                 var editBlog = function(id) {
                    var end = PARSE.URL + 'classes/blogs/' + id.objectId;
                 	return $http.put(end, id, PARSE.CONFIG);

                 };

                var deleteBlogs = function(id) {
                    return $http.delete(PARSE.URL + 'classes/blogs/' + id, PARSE.CONFIG).success(function(){
                        $state.go('portal.blogList');
                    });
                };

                return {
                    get: getBlog,
                    add: addBlog,
                    edit: editBlog,
                    del: deleteBlogs,
                    getSingle : getSingle 

                };

            }
        ]);
}());