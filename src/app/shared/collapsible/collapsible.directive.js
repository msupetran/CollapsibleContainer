(function () {
    'use strict';

    angular
        .module('app.shared')
        .directive('collapsible', CollapsibleDirective);

    function CollapsibleDirective() {
        var directive = {
            restrict: 'E',
            scope: {
                
            }
        };
        return directive;
    }
})();