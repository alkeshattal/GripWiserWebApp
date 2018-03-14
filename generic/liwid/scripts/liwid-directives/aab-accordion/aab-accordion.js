/**
 * @ngdoc directive
 * @module ui.aabAccordionTwo
 * @name ui.aabAccordionTwo.aabAccordionTwo:aabAccordionTwo
 * @restrict E
 *
 * @param {boolean} isChevronRight (optional) Place chevron on the right side of the accordion. Default is left
 * @param {boolean} isAccordionOpen (optional) Expand accordion at page load.
 *
 * @description
 * This is the new, improved accordion that is much more user-friendly than aab-accordion. It has been developed using multiple transclusion,
 * making it more modular and flexible.
 *
 * @layout
 * # ACCORDION AREAS
 * This component consists of five areas. All of these areas are optional and can hold any desired content.
 * - accordion left area: left area of the accordion.
 * - accordion right area: right area of the accordion.
 * - accordion icon-left area: area where an icon should be located.
 * - accordion icon-right area: area where an icon should be located.
 * - accordion expandable area: area where the expandable information should be located.
 *
 * # ALIGN ACCORDION AREAS
 * The contents of each of the accordion areas can each be vertically aligned by adding one of the following classes to
 * its element (align center is default):
 * - Align top: .ocf-accordion-two-align-top
 * - Align bottom: .ocf-accordion-two-align-bottom
 *
 * @Options
 * # Options
 * - The chevron can be placed on the right by applying the is-chevron-right attribute to the root element (aab-accordion-two).
 *
 *
 * @structure
 <aab-accordion-two>
 <accordion-left-icon-area>Transcluded content...</accordion-left-icon-area>
 <accordion-left-area>Transcluded content...</accordion-left-area>
 <accordion-right-area>Transcluded content...</accordion-right-area>
 <accordion-right-icon-area>Transcluded content...</accordion-right-icon-area>
 <accordion-expandable-area>Transcluded content...</accordion-expandable-area>
 </aab-aab-accordion-two>
 */

define([
    'angular','ui.bootstrap'
], function(angular) {
    'use strict';

    angular.module('ui.aabAccordionTwo', ['ui.bootstrap'])
        .directive('aabAccordionTwo', aabAccordionTwo);

    function aabAccordionTwo() {
        return {
            restrict: 'E',
            replace: true,
            transclude: {
                accordionLeftIconArea: '?accordionLeftIconArea',
                accordionLeftArea: '?accordionLeftArea',
                accordionRightArea: '?accordionRightArea',
                accordionRightIconArea: '?accordionRightIconArea',
                accordionExpandableArea: '?accordionExpandableArea'
            },
            scope: {
                isChevronRight: '@',
                isAccordionOpen: '@'
            },
            require: '^uibAccordion',
            templateUrl: './generic/liwid/scripts/liwid-directives/aab-accordion/aab-accordion.html',

            link: function(scope, element, attrs, controller, transcludeFn) {
                scope.isIconLeftTranscluded = transcludeFn.isSlotFilled('accordionLeftIconArea');
                scope.isLeftAreaTranscluded = transcludeFn.isSlotFilled('accordionLeftArea');
                scope.isRightAreaTranscluded = transcludeFn.isSlotFilled('accordionRightArea');
                scope.isIconRightTranscluded = transcludeFn.isSlotFilled('accordionRightIconArea');
                scope.isExpandableAreaTranscluded = transcludeFn.isSlotFilled('accordionExpandableArea');
            }
        };
    }
});
