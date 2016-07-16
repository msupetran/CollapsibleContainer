(function () {
    'use strict';

    var app = angular.module('app');
    app.controller('AppController', AppController);

    AppController.$inject = ['$scope'];
    function AppController($scope) {
        var vm = this;
        $scope
        $scope.items = [
            { name: "Item No. 1", count: 10, isCollapsed: true },
            { name: "Item No. 2", count: 20, isCollapsed: false },
            { name: "Item No. 3", count: 30, isCollapsed: true },
            { name: "Item No. 4", count: 30, isCollapsed: true }
        ];
    }
})();