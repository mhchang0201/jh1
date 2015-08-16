'use strict';

angular.module('jhipster1App')
    .factory('Register', function ($resource) {
        return $resource('api/register', {}, {
        });
    });


