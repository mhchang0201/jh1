'use strict';

angular.module('jhipster1App')
    .controller('BookDetailController', function ($scope, $rootScope, $stateParams, entity, Book) {
        $scope.book = entity;
        $scope.load = function (id) {
            Book.get({id: id}, function(result) {
                $scope.book = result;
            });
        };
        $rootScope.$on('jhipster1App:bookUpdate', function(event, result) {
            $scope.book = result;
        });
    });
