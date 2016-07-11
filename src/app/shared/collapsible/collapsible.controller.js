(function () {
    'use strict';

    angular
        .module('app.shared')
        .controller('CollapsibleController', CollapsibleController);

    CollapsibleController.$inject = ['$scope'];
    function CollapsibleController($scope) {
        var vm = this;
    }
})();