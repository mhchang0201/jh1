/*jshint bitwise: false*/
'use strict';

angular.module('jhipster1App')
    .factory('BootSwatchService', function ($http) {
        return {
            get: function() {
                return $http.get('http://api.bootswatch.com/3/').then(function (response) {
                    return response.data.themes;
                });
            }
        };
    });