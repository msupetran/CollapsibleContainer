(function () {
    'use strict';

    var app = angular.module('hasOwnProperty');
    app.controller('AppController', AppController);

    AppController.$inject = ['$scope'];
    function AppController($scope) {
        var vm = this;
    }
})();