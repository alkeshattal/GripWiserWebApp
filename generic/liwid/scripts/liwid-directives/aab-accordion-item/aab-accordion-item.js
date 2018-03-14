define('component/ui/aab-accordion-item/aab-accordion-item', ['angular'], function(angular) {
    'use strict';
    angular
        .module('ui.aabAccordionItem', [])
        .directive('aabAccordionItem', aabAccordionItem);
    /**
     * @ngdoc directive
     * @name ui.aabAccordionItem.aabAccordionItem:aabAccordionItem
     * @restrict E
     * @param {String} title : Title of the feature in the accordion
     * @param {Boolean} expand : Show the item initially expanded or not. (optional)
     *
     * @description
     * The <code>aab-accordion-item</code> is one item in an <code>aab-accordion</code>
     * Its title is always shown, its body is only visible when expanded. By default a <code>aab-accordion-item</code>
     * starts collaped. settings the <code>expand</code> to true will make the item start expanded.
     *
     * # Functional specifications
     *
     * ## Presentation behavior.
     * - Fills the accordion item with a title and transcludes its content.
     *
     * @example
     * <pre>
     * <aab-accordion-item ng-repeat="item in items" title="{{item.myTitle}}" expand="@first">
     *     <p>{{item.description}}</p>
     *     <p>{{item.text}}</p>
     * </aab-accordion>
     * </pre>
     */
    function aabAccordionItem() {
        return {
            restrict: 'E',
            transclude: true,
            scope: {
                title: '@',
                expand: '=?'
            },
            templateUrl: '/nl/widgetdelivery/unauthenticated/oca/app/components/ui/aab-accordion-item/aab-accordion-item.html',
            link: function($scope) {
                if (angular.isUndefined($scope.expand)) {
                    $scope.expand = false;
                }
            }
        };
    }
});
