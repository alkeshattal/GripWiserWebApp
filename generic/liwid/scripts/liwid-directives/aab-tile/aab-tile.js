/**
 * @ngdoc directive
 * @name  ui.aabTile.aabTile:aabTile
 * @restrict E
 * @param {String}  name The primary name or title of the item. The text will be truncated when it does not fit in the designated area.
 * @param {String}  status The status defines the interaction patern and presentation of the tile.
 *                  Allowed values: [interactive, error, disabled, readonly, secondaryonly].
 * @param {Number}  primaryInfo (optional) The Primary-level information of the tile. This can be either an amount or a text.
 *                  This information will not be truncated.
 * @param {String}  additionalInfo (optional) The Secondary-level information of the tile.
 *                  The text will be truncated when it does not fit in the designated area.
 * @param {String}  additionalInfoExtra (optional) The Third-level information of the tile.
 *                  The text will be truncated when it does not fit in the designated area.
 * @param {String}  currency (optional) The ISO currency code to display when the Primary-level information is an amount.
 *                  The ISO code will be displayed as is, only the EUR code will display a (euro) symbol.
 * @param {String}  logo (optional) User defined logo being passed as a URL.
 * @param {String}  icon (optional) Default logo that will be used when no user defined logo is being passed. The icon can be passed as a classname.
 * @param {String}  displayMode (optional) The displayMode can be set to define a specific way of presenting the tile.
 *                  Allowed values: [compact, oneLine, nameOnly].
 * @param {String}  defaultAction (optional) Action that should be triggered when clicking the main area of the tile.
 * @param {String}  defaultActionDescription (optional)  Description what the default action does for screen readers to improve accessibility.
 * @param {String}  secondaryActionIndicator (optional) Indicator that adds a class that will present a secondaryAction area including the applicable icon.
 *                  An extra divider will be presentated when a secondaryAction is defined as well. Both the icon and divider will be vertical aligned.
 *                  Allowed values including icon can be found at {@link ui.constants.ICON_CLASSES_ACTIONS:ICON_CLASSES_ACTIONS ICON_CLASSES_ACTIONS}.
 * @param {String}  secondaryAction (optional) Action that should be triggered when clicking the secundaryAction area of the tile.
 *                  If not defined, the defaultAction will be triggered.
 *                  SecondaryActionIndicator must be set in order to get a clickable secondaryAction area.
 * @param {String}  secondaryActionDescription (optional) Description what the secundaryAction is for screen readers to improve accessibility..
 * @param {Boolean} showMerged (optional) This boolean can be set to add a class which indicates a relation of the current tile
 *                  with the tile following the current tile. By default this Boolean will be set to false.
 * @param {String}  ng-model (optional) Is needed in conjunction with aab-tile-dropdown to register its model with the dropdown.
 * @param {Boolean} unselected (optional) This boolean is used for the 'Make a choice' tile in the tile dropdown.
 * @param {String}  unreadTile (optional) This String can be set to display appropriate class with the title of the tile. Allowed value: [bold].
 * @param {String}  primaryInfoIcon (optional) This String can be set to display icon in the place of primary info.
 * @param {Boolean} isTileExtended (optional) This boolean can be set to show extentended area of tile and trancludes the content.
 * @param {String}  moreInfoInAdditionalField (optional) The Forth-level information added with additional info and additional info extra.
 *                  The text will be truncated when it does not fit in the designated area.
 * @param {String}  inLineLogo (optional) User defined inLineLogo being passed as a URL, inline with name.
 * @param {String}  inLineIcon (optional) Default inLineLogo that will be used when no user defined inLineLogo is being passed. The inLineIcon can be passed as a classname.
 * @description
 * The aab-tile is a block element to display a collection of information concerning for instance an account, businesscontact or contract.
 * aab-tile should always be used in combination with aab-tiles as wrapper component that can be found at {@link ui.aabTiles.aabTiles:aabTiles}
 * Optionally you can have a combination of logo/icon, name, parimary info and additional info, that are all part of a single item (user / account) on the tile.
 * A tile can be interactive, read only or disabled.
 * The interactive tile will be clickable and can have a default and/or secundary action. In case of a secundary action, the clickable area will be split in two
 * where clicking the left side will result in the default action and the right (smaller) side will result in the secundary action.
 * aab-tile can be extend and transcludes its content.
 * If abb-notification-block is trancludes in aab-tile, then there is extra bottom margin because of well container in aab-notification-block which is requirement for aab-notification-block
 * use is-notification-transcluded attribute, when transculde abb-notification-block in abb-tile to set correct bottom margin.
 * Please check aab-notification-block ng-docs to check how to use is-notification-transcluded  attribute.
 * The aab-tile can be used in combination with aab-tile-dropdown.
 *
 * # Functional specifications
 *
 * ## Presentation behavior
 * ###name
 * The name will be truncated when it does not fit in the designated area.
 *
 * ###status
 * The status of the tile will have impact on the presentation:
 *
 * | Value          | Presentation specifics |
 * | ------         | -----------------------|
 * | interactive    | adds a class to give it hover styling.|
 * | error          | adds a class to give it hover styling.|
 * | disabled       | adds a class to show the tile in disabled styling.|
 * | readonly       | adds a class to show the tile in readonly styling.|
 * | secondaryonly  | adds a class to show the tile in readonly styling, with secondary action active.|
 *
 * ###displayMode
 * The displayMode parameter can be used to define a specific way of presenting the tile
 *
 * | Value     | Presentation specifics |
 * | ------    | -----------------------|
 * | compact   | - adds a class to show the compact mode
 *               - icon is not shown
 *               - rendering of the additional + additionalExtra info is different. A seperator is used instead of a break.
 *               - NB:(so the seperator can be a parameter as well (seperator( break or divider))|
 * | oneLine   | - adds a class to show the oneLine mode.
 *               - additionalInfoExtra and seperator are not shown and alignment is different |
 * | nameOnly  | - adds a class to show name only with tile or name with icon and secondondary icon
 *               - primaryInfo, additionalInfo, additionalInfoExtra are not shown. If there is an action on secondary icon then seprator will show. If tile is not clickable and only secondary icon is clickable then use stauts secondaryOnly |
 * ###primaryInfo
 * The primaryInfo will display a currency symbol when property 'currency' has a value.
 * When the currency value is 'EUR', a eurosymbol will be presented and for all other currency values it shows the corresponding 3 ISO characters.
 * When primaryInfo value is negative, it is prefixed with a minus symbol. Tile can have a icon on the place of the 'primary info'. Use PrimaryInfoIcon attribute to display the icon.
 *
 * ###secondaryActionIndicator
 * The secondaryActionIndicator will add a class that will present the secondaryActionArea including the applicable icon
 * and an extra divider (both vertical aligned) when a secondaryAction is defined.
 *
 * ###logo and icon
 * Default a logo or icon is not shown. When logo is defined, the provided URL will be used.
 * If no logo is defined but an icon is defined, the provided icon based on class name will be used.
 * The logo will be served with the defined icon as fallback. When no icon has been defined icon ocf-contract-type-general
 * will be used as a fallback for logos
 *
 * ## Interactive behaviour
 * ###status
 * The status of the tile will have impact on the behaviourpresentation:
 *
 * | Value       | Interaction specifics      |
 * | ------      | ----------------------     |
 * | interactive | The tile will be clickable.|
 * | disabled    | No action allowed.         |
 * | readonly    | No action allowed.         |
 *
 * ###secondaryActionIndicator
 * The secondaryActionIndicator will add a class that will divide the clickable area in two when a secondaryAction is defined.
 * Clicking the main area of the tile will trigger the defaultAction, clicking the secondaryActionArea will trigger the secondaryAction.
 *
 * ## Example
 * <aab-tiles>
 *      <aab-tile ng-repeat="item in aabTileController.list"
 *         name="item.name"
 *         primary-info="item.primaryInfo"
 *         currency="item.currency"
 *         additional-info="item.additionalInfo"
 *         additional-info-extra="item.additionalInfoExtra"
 *         logo="item.logo"
 *         icon="{{item.icon}}"
 *         display-mode="{{item.display}}"
 *         status="{{item.status}}"
 *         default-action="aabTileController.actionTileList(item.defaultAction)"
 *         default-action-description="{{item.defaultActionDescription}}"
 *         merge-tile="{{item.merge}}"
 *         secondary-action="aabTileController.actionTileList(item.defaultAction)"
 *         secondary-action-indicator="{{item.secondaryActionIndicator}}"
 *         secondary-action-description="{{item.secondaryActionDescription}}"
 *     </aab-tile>
 * </aab-tiles>
 * <aab-tiles>
 *      <aab-tile ng-repeat="item in aabTileController.list1"
 *          name="item.name"
 *          additional-info="item.additionalInfo"
 *          additional-info-extra="item.additionalInfoExtra"
 *          more-info-in-additional-field="item.moreInfoInAdditionalField"
 *          in-line-logo="item.inLineLogo"
 *          in-line-icon="{{item.inLineIcon}}"
 *          display-mode="{{item.display}}"
 *          status="{{item.status}}"
 *          default-action="aabTileController.actionTileList1(item.defaultAction)"
 *          default-action-description="{{item.defaultActionDescription}}"
 *          secondary-action-indicator="{{item.secondaryActionIndicator}}"
 *          secondary-action-description="{{item.secondaryActionDescription}}"
 *     </aab-tile>
 * </aab-tiles>
 */
define('component/ui/aab-tile/aab-tile', ['angular'], function(angular) {
    'use strict';
    angular
        .module('ui.aabTile', [])
        .directive('aabTile', aabTile);

    function aabTile($filter, $timeout, ICON_CLASSES_ACTIONS) {
        return {
            restrict: 'E',
            controllerAs: 'aabTileController',
            controller: function($scope, $element, $attrs) {
                var self = this;
                // check if an icon has been defined, create a fallback icon for provided logos
                $scope.logoClass = angular.isDefined($scope.icon) ? 'glyphicon ' + $scope.icon :
                    'glyphicon ocf-contract-type-general ';
                $scope.inLineLogoClass = angular.isDefined($scope.inLineIcon) ? 'glyphicon ' + $scope.inLineIcon :
                    'glyphicon ocf-contract-type-general ';
                if (angular.isDefined($attrs.status) && $scope.status) {
                    $scope.disabled = $scope.status === 'disabled';
                    $scope.interactive = $scope.status === 'interactive';
                    $scope.readonly = $scope.status === 'readonly';
                    $scope.error = $scope.status === 'error';
                    $scope.secondaryonly = $scope.status === 'secondaryonly';
                }
                if (angular.isDefined($attrs.displayMode) && $scope.displayMode) {
                    $scope.compact = $scope.displayMode === 'compact';
                    $scope.oneLine = $scope.displayMode === 'oneLine';
                }
                if (angular.isDefined($attrs.secondaryActionIndicator) && angular.isDefined(ICON_CLASSES_ACTIONS[$scope.secondaryActionIndicator])) {
                    $scope.secondaryActionPresent = true;
                    $scope.secondaryActionIndicatorClass = ICON_CLASSES_ACTIONS[$scope.secondaryActionIndicator];
                } else if ($scope.secondaryActionIndicator === '') {
                    $scope.secondaryActionPresent = false;
                } else {
                    $scope.secondaryActionPresent = false;
                }

                // Action that will be triggered when secondary button is clicked.
                $scope.secondaryFunction = function(event) {
                    event.event.stopPropagation();
                    if (angular.isDefined($attrs.secondaryAction)) {
                        $scope.secondaryAction(event);
                    } else {
                        $scope.defaultAction();
                    }
                };
                // If Secondary action is present on icon then add seperator
                if (angular.isDefined($attrs.secondaryAction)) {
                    $scope.showTileIconSeperatorClass = 'ocf-tile-action-icon-separator';
                }

                // format the primaryInfo according to the property currency (EUR becomes the euro symbol)
                if ($scope.currency && angular.isNumber($scope.primaryInfo)) {
                    /* process value of primaryInfo to primaryInfoProcessed so that the filter is not applied to
                        the two-way databinded primaryInfo
                    */
                    $scope.primaryInfoProcessed = $filter('currency')($scope.primaryInfo,
                        $scope.currency === 'EUR' ? '€' : $scope.currency);
                } else {
                    $scope.primaryInfoProcessed = $filter('translate')($scope.primaryInfo);
                }
                // Primary info can be icon
                $scope.primaryInfoIconClass = angular.isDefined($scope.primaryInfoIcon) ? 'ocf-tile-primary-info-icon glyphicon ' + $scope.primaryInfoIcon :
                    'ocf-tile-primary-info-icon glyphicon ocf-contract-type-general';

                // we need to ignore the clickevent in the transcluded area
                $scope.ignoreClick = function(e) {
                    e.stopPropagation();
                };

                /*check status to add tabindex, if status is intractive then tabindex=0
                  if status is disable or readonly, tabindex=-1 because foucs is not required on disable and readonly tiles
                */
                if(angular.isDefined($attrs.status) && $scope.status){
                    if($scope.status === 'disabled' || $scope.status === 'readonly' || $scope.status === 'secondaryonly'){
                        self.tabindex = -1;
                    }else {
                        self.tabindex = 0;
                    }
                    if ($scope.status !== 'readonly' && $scope.status !== 'disabled' ) {
                        self.tabindexSecondaryAction = 0;
                    } else {
                        self.tabindexSecondaryAction = -1;
                    }
                }
            },
            replace: true,
            transclude: true,
            require: ['?^aabTileDropdown', '?ngModel'],
            scope: {
                secondaryAction: '&',
                defaultAction: '&',
                defaultActionDescription: '@',
                name: '=',
                primaryInfo: '=',
                additionalInfo: '=',
                additionalInfoExtra: '=',
                logo: '=',
                unselected: '=',
                currency: '=',
                status: '@',
                displayMode: '@',
                hasSecondaryAction: '=',
                secondaryActionIndicator: '@',
                secondaryActionDescription: '@',
                mergeTile: '@',
                icon: '@',
                unreadTile: '@',
                primaryInfoIcon: '=',
                isTileExtended: '=',
                moreInfoInAdditionalField: '=',
                inLineLogo: '=',
                inLineIcon: '@',
                altTextImg: '@'
            },
            // passing in contentUrl variable
            templateUrl: function($element, $attrs) {
                if ($attrs.displayMode === 'nameOnly') {
                    return '/nl/widgetdelivery/unauthenticated/oca/app/components/ui/aab-tile/aab-tile-name-only.html';
                }
                return '/nl/widgetdelivery/unauthenticated/oca/app/components/ui/aab-tile/aab-tile.html';
            },
            link: function($scope, $element, $attrs, ctrl) {
                var tileDropdownCtrl = ctrl[0];
                var ngModelCtrl = ctrl[1];
                if (!ngModelCtrl || !tileDropdownCtrl) {
                    return;
                }
                // give time to initialize the ng-model of this tile (receive the two-way-data-binding)
                $timeout(function() {
                    // register this item to the dropdown controller
                    tileDropdownCtrl.registerItem(ngModelCtrl.$modelValue, $scope);
                    // attach click action when item is interactive (not readonly or disabled)
                    if (!($scope.readonly || $scope.disabled)) {
                        $element.bind('click', function() {
                            tileDropdownCtrl.selectItem(ngModelCtrl.$modelValue);
                            $scope.$parent.$apply();
                        });
                    }
                });
                $element.on('$destroy', function() {
                    $scope.$destroy();
                });
            }
        };
    }
});
