(function () {
    'use strict';

    angular
        .module('app.shared')
        .controller('ContainerController', ContainerController);

    ContainerController.$inject('$scope');
    function ContainerController($scope) {
        var vm = this;
    }
})();