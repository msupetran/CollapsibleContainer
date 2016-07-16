(function () {
    'use strict';

    angular
        .module('app.shared')
        .directive('nameDirective', NameDirective);

    function NameDirective() {
        var directive = {
            restrict: 'A',
            scope: {
                name: '='
            }
        };
        return directive;
    }
})();
