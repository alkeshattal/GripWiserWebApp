/**
 * @ngdoc directive
 * @module ui.aabToggleTile
 * @name ui.aabToggleTile.aabToggleTile:aabToggleTile
 * @restrict E
 *
 * @callback action (optional) changing the toggle fires a callback that can be attached to a function in the module
 * @param {boolean} isCollapsed (required) when true the transcluded area is hidden, false opens it
 * @param {boolean} value (required) the value of the toggle
 * @param {string} valueLabelTrue (required) the label that shows the the toggle is true
 * @param {string} valueLabelFalse (required) the label that shows the the toggle is false
 * @param {string} title (required) the title (h5) of the tile
 * @param {string} tileIcon (required) the icon to be shown in the tile (the class, for example ocf-image-tasklist)
 * @param {string} tileDescription (required) the subtitle shown underneath the title
 * @param {boolean} tileHasFoldout (required) when false the transcluded area will be hidden
 * @param {boolean} tileIsConnected (required) when true the tiles will connect, else they have a margin between them
 * @param {string} tileId (required) a unique id for each toggle-tile used for proper angular binding
 *  @param {boolean} hideToggle (optional) when true the toggle is not visible, else the toggle is visible (default is false)
 *
 * @description
 * Creates a tile that has a icon, title and subtitle on the left side and a switch with changing text on the right
 * It also has a (optional) transcluded area that can be folded out using the callback function action to modify the value of isCollapsed
 *
 * @example
 * <aab-toggle-tile
 action="applicationCtrl.testFunc('internetBankingChanged')"
 is-collapsed="applicationCtrl.toggleTiles.foldoutIsCollapsed"
 value="applicationCtrl.toggleTiles.toggleValue"
 value-label-true="zichtbaar voor uw kind"
 value-label-false="niet zichtbaar voor uw kind"
 title="Internet Bankieren"
 tile-icon="ocf-image-tasklist"
 tile-description="Wilt u uw kind toegang geven tot internet bankieren?"
 tile-has-foldout="true"
 tile-is-connected="true"
 tile-id="001"
 hide-toggle="true">
 <aab-form-group label="Generic-firstNameLabel">
 <aab-input
 model="applicationCtrl.preferredName.firstName"
 ng-model="applicationCtrl.preferredName.firstName"
 required="true"
 placeholder="{{'Generic-firstNamePlaceholder' | translate}}"
 type="alphanumeric"
 testkey="input-firstName"
 maxlength="20">
 </aab-input>
 <aab-form-feedback
 required-error="Generic-Error-FirstName-Required"
 test-key="error-triangle-first-name-required">
 </aab-form-feedback>
 </aab-form-group>
 </aab-toggle-tile>
 */
'use strict';
angular.module('ui.aabToggleTile', [])
    .directive('aabToggleTile', aabToggleTile);

function aabToggleTile() {
    return {
        restrict: 'E',
        transclude: true,
        scope: {
            action: '&',
            isCollapsed: '=',
            value: '=',
            valueLabelTrue: '@',
            valueLabelFalse: '@',
            tileTitle: '@',
            tileIcon: '@',
            tileDescription: '@',
            tileHasFoldout: '=',
            tileIsConnected: '=',
            tileId: '@',
            hideToggle: '<'
        },
        templateUrl: './generic/liwid/scripts/liwid-directives/aab-toggle-tile/aab-toggle-tile.html',
        link: function ($scope) {
            $scope.selectedValueLabel = 'none';
            $scope.$watch('value', function () {
                $scope.selectedValueLabel = ($scope.value) ? $scope.valueLabelTrue : $scope.valueLabelFalse;
            });
        },
        controllerAs: 'aabToggleTileController'
    };
};
