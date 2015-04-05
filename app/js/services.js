"use strict";

angularMovieApp.factory("Movie", function ($http) {
    var API_URI = '/server/api/movies';

    return {

        fetch : function() {
            return $http.get(API_URI);
        },

        create : function(movie) {

        },

        remove : function(id) {

        },

        fetchOne : function(id) {

        },

        update : function(movie) {

        }

    };

});
