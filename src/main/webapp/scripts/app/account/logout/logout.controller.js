'use strict';

angular.module('jhipster1App')
    .controller('LogoutController', function (Auth) {
        Auth.logout();
    });
