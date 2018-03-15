define('tsg/shared/directives/tsg-header/tsg-header', [
    'angular'
], function(angular) {
    'use strict';

    angular.module('tsg-header', [])

    .directive('tsgHeader', tsgHeader);

    function tsgHeader() {
        return {
            restrict: 'E',
            scope: {
                items: '=',
                activeState: '@',
                firstLevel: '@',
                rootState: '@',
                extendedIcon: '=',
                searchData: '=',
                headerTypeaheadOnSelect: '&'
            },
            templateUrl: 'shared/directives/tsg-header/tsg-header.html',
            link: function($scope, $element) {
                initializeMenu._initialize();
                $scope.closeSlideMenu = function() {
                    initializeMenu.closeSlideMenu();
                };

                angular.element($element).find('input').on('keypress', eventHandler);

                function eventHandler(e) {
                    if(e.keyCode === 13) {
                        $scope.headerTypeaheadOnSelect({model: undefined,search: $scope.selected});
                        $scope.selected = '';
                    }
                }
            }
        };
    }
});
