/**
 * @ngdoc directive
 * @name  ui.aabTileExpandable.aabTileExpandable:aabTileExpandable
 * @restrict E
 *
 * @param {String}  tileName The primary name or title of the item. The text will be truncated when it does not fit in the designated area.
 * @param {String}  tileLabel The aria-label for the component and used for accessbility.
 * @param {String}  label The label for the checkbox and used for accessbility.
 * @param {String}  checkboxName unique name for the checkbox.
 * @param {Boolean} isSelectable Checkbox will be displayed, if the tile can be selectable.
 * @param {Boolean} isSelected Checkbox will be checked, if the tile is selected.
 * @param {Boolean} isCollapsed Details section of the tile will be hidden, if true.
 * @param {Function} checkboxAction This function will be triggered on click of checkbox.
 * @param {Function} tileAction This function will be triggered on click of tile.
 * @param {Object} icon This object contains the classes and labels required to display the icon on the right-bottom corner of the tile.
 * @param {Boolean} halfGutter (optional) Reduces tile padding to 10px.
 * @param {String}  primaryInfoClasses (optional) CSS classes to be applied to primary information.
 * @param {String}  tileNameClasses (optional) CSS classes to be applied to tile name.
 * @param {String}  logoClasses (optional) CSS classes to be applied to logo.
 * @param {String}  marked (optional) CSS classes to be applied to tile for notification.
 * @param {Object}  hiddenPrint Object contains the values to hide while print.
 * ## Example
 * hiddenPrint = {
 *    printInfo: true,
 *    logo: true
 * }
 *
 * @description
 * The <code>aab-tile-expandable</code> is a component to expand the tile to see the more details.
 *
 * ## Presentation behavior.
 * aab-expandeble-tile can expand to show more details when click on the tile and closed after click again on the same tile.
 * In Expanded state tile transcludes other components. It can be a button, label, paragraph etc.
 *
 * ## Example
 * <aab-tiles>
 *      <aab-tile-expandable
 *              data-primary-info="primary info"
 *              data-tile-name="name"
 *              data-additional-info="additional info"
 *              data-additional-info-extra="extra extra extra"
 *              data-logo="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR4nGP6zwAAAgcBApocMXEAAAAASUVORK5CYII="
 *              data-logo-alternative="sunny"
 *              data-tile-label="sunny Tile"
 *              half-gutter="true"
 *              primary-info-classes="strong"
 *              tile-name-classes="strong"
 *              logo-classes="glyphicon ocf-contract-type-general">
 *           <p>This is all kind of information we can put in the tile Lets do a list!</p>
 *           <ul>
 *               <li>What do you think of this list item?</li>
 *              <li>or this one</li>
 *              <li>maybe this one is better?</li>
 *           </ul>
 *           <p>We can allso do some buttons how do you like that hea?</p>
 *           <aab-button class="btn-sm" label="This is a small button" action="aabTileExpandableController.clickMe()"></aab-button>
 *      </aab-tile-expandable>
 * </aab-tiles>
 */

define('component/ui/aab-tile-expandable/aab-tile-expandable', ['angular', 'angular-animate', 'component/ui/aab-tile/aab-tile'], function(angular) {
    'use strict';
    angular
        .module('ui.aabTileExpandable', ['ui.aabTile', 'ngAnimate'])
        .directive('aabTileExpandable', aabTileExpandable);

    function aabTileExpandable(aabTileDirective) {
        var aabTileExpandableDirective = {};
        var aabtileDirective = angular.copy(aabTileDirective[0]);
        aabTileExpandableDirective.controller = aabtileDirective.controller;
        aabTileExpandableDirective.restrict = aabtileDirective.restrict;
        aabTileExpandableDirective.transclude = true;
        aabTileExpandableDirective.controllerAs = 'aabTileExpandableDirective';
        angular.extend(aabtileDirective.scope, {
            tileName: '@',
            tileLabel: '@',
            label: '@',
            checkboxName: '@',
            isSelectable: '=',
            isSelected: '=',
            isCollapsed: '=?',
            checkboxAction: '&',
            tileAction: '&',
            icon: '=',
            halfGutter: '@',
            primaryInfoClasses: '@',
            tileNameClasses: '@',
            logoClasses: '@',
            marked: '=',
            hiddenPrint: '='
        });
        aabTileExpandableDirective.scope = aabtileDirective.scope;
        aabTileExpandableDirective.templateUrl = '/nl/widgetdelivery/unauthenticated/oca/app/components/ui/aab-tile-expandable/aab-tile-expandable.html';
        aabTileExpandableDirective.link  = function($scope) {
            if(angular.isUndefined($scope.isCollapsed)) {
                $scope.isCollapsed = true;
            }
            // because of the padding we need to ignore the clickevent in the transcluded area
            $scope.ignoreClick = function(e) {
                e.stopPropagation();
            }
        };
        return aabTileExpandableDirective;
    }
});
