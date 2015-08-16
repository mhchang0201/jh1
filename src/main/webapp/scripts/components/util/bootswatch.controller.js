/*jshint bitwise: false*/
'use strict';

angular.module('jhipster1App')
    .controller('BootSwatchController', function ($scope, BootSwatchService) {
        /*Get the list of availabel bootswatch themes*/
        BootSwatchService.get().then(function(themes) {
            $scope.themes = themes;
            $scope.themes.unshift({name:'Default',css:''});
        });
    });