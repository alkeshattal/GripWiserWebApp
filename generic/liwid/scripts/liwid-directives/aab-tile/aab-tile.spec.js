//FIXED: fix memoryleaks by cleaning up this file

/**
 * @description
 * Unit test for AabTile
 */
/* globals define describe beforeEach module inject expect it*/
define(['angular', 'angular-mocks', 'component/ui/aab-tile/aab-tile'], function(angular) {
    'use strict';

    describe('Unit testing AabTile', function() {

        var $compile;
        var $timeout;
        var $scope;
        var element;
        var aabTileDropdown;
        var aabTileDropdownControllerMock;

        afterEach(function() {
            if (element) {
                element.remove();
            }
        });

        afterAll(function() {
            $compile = null;
            $timeout = null;
            $scope = null;
            aabTileDropdown = null;
            aabTileDropdownControllerMock = null;
            element = null;
        });

        beforeEach(module('ui.aabTile', 'oca.templates', 'pascalprecht.translate', function($provide, $translateProvider) {
            $provide.constant('ICON_CLASSES_ACTIONS', {
                delete: 'glyphicon-trash',
                information: 'glyphicon-info-sign',
                stepUp: 'ocf-icon-edentifier2',
                cosign: 'ocf-icon-cosign',
                stepUpCosign: 'ocf-icon-edentifier2-cosigner',
                dropdown: 'ocf-icon-down',
                drag: 'glyphicon-move',
                navigate: 'glyphicon-chevron-right',
                positive: 'ocf-icon-positive',
                negative: 'ocf-icon-negative',
                inProgressState: 'ocf-icon-in-progress-state'
            });

            $translateProvider
                .registerAvailableLanguageKeys(['en', 'en_EN', 'de', 'de_DE'], {
                    en_US: 'en_EN'
                })
                .translations('en', {
                    'name-translation-key': 'This is the translated name key',
                    'additional-info-translation-key': 'This is the translated additional info key',
                    'additional-extra-info-translation-key': 'This is the translated additional extra info key',
                    'primary-info-translation-key': 'Your account has been cancelled'
                })
                .preferredLanguage('en');
        }));

        beforeEach(inject(function(_$rootScope_, _$compile_, _$timeout_) {
            // The injector unwraps the underscores (_) from around the parameter names when matching
            $compile = _$compile_;
            $timeout = _$timeout_;
            $scope = _$rootScope_.$new();
            $scope.model = undefined;
            $scope.list = [
                {
                    accountNumber: 9911.0,
                    externalName: 'Vermogens Spaarrekening',
                    currentBalance: 1140.49,
                    currency: 'EUR',
                    accountHolderName: 'ABC1',
                    overdraftLimit: 0,
                    transferAllwdFlag: false,
                    standingOrderFlag: true,
                    ibanNumber: 'NL9911',
                    logo: './images/responsive-image-landscape2.png',
                    secondaryActionIndicator : 'stepUpCosign'

                }, {
                    accountNumber: 9922.0,
                    externalName: 'Vermogens Spaarrekening',
                    currentBalance: 2340.49,
                    currency: 'USD',
                    accountHolderName: 'ABC2',
                    overdraftLimit: 0,
                    transferAllwdFlag: false,
                    standingOrderFlag: true,
                    ibanNumber: 'NL00ABNA199200000',
                    display: 'compact',
                    icon: 'ocf-contract-type-insurance',
                    unreadTile: 'bold'

                }, {
                    accountNumber: 9933.0,
                    externalName: 'additional-info-translation-key',
                    currentBalance: 3340.49,
                    currency: 'EUR',
                    accountHolderName: 'name-translation-key',
                    overdraftLimit: 0,
                    transferAllwdFlag: false,
                    standingOrderFlag: true,
                    ibanNumber: 'additional-extra-info-translation-key',
                    icon: 'ocf-contract-type-insurance'
                }, {
                    accountNumber: 9933.0,
                    externalName: 'additional-info-translation-key',
                    currentBalance: 'primary-info-translation-key',
                    accountHolderName: 'name-translation-key',
                    overdraftLimit: 0,
                    transferAllwdFlag: false,
                    standingOrderFlag: true,
                    ibanNumber: 'additional-extra-info-translation-key',
                    icon: 'ocf-contract-type-insurance'
                }, {
                    accountNumber: 9911.0,
                    externalName: 'Vermogens Spaarrekening',
                    currentBalance: 1140.49,
                    currency: 'EUR',
                    accountHolderName: 'ABC1',
                    overdraftLimit: 0,
                    transferAllwdFlag: false,
                    standingOrderFlag: true,
                    ibanNumber: 'NL9911',
                    logo: './images/responsive-image-landscape2.png',
                    secondaryActionIndicator : 'positive'
                }, {
                    externalName: 'Vermogens Spaarrekening',
                    accountHolderName: 'ABC1',
                    overdraftLimit: 0,
                    transferAllwdFlag: false,
                    standingOrderFlag: true,
                    ibanNumber: 'NL9911',
                    primaryInfoIcon: 'glyphicon-warning-sign'
                }, {
                    accountNumber: 9922.0,
                    externalName: 'Vermogens Spaarrekening',
                    accountHolderName: 'ABC2',
                    overdraftLimit: 0,
                    transferAllwdFlag: false,
                    standingOrderFlag: true,
                    ibanNumber: 'NL00ABNA199200000',
                    display: 'compact',
                    unreadTile: 'bold',
                    inLineIcon: 'ocf-contract-type-payment'
                }, {
                    accountNumber: 9911.0,
                    externalName: 'Vermogens Spaarrekening',
                    currentBalance: 1140.49,
                    currency: 'EUR',
                    overdraftLimit: 0,
                    transferAllwdFlag: false,
                    standingOrderFlag: true,
                    ibanNumber: 'NL9911',
                    inLineLogo: './images/responsive-image-landscape2.png'
                }, {
                    accountNumber: 9911.0,
                    externalName: 'Vermogens Spaarrekening',
                    currentBalance: 1140.49,
                    currency: 'EUR',
                    accountHolderName: 'ABC1',
                    overdraftLimit: 0,
                    transferAllwdFlag: false,
                    standingOrderFlag: true,
                    ibanNumber: 'NL9911',
                    logo: './images/responsive-image-landscape2.png',
                    secondaryActionIndicator : 'inProgressState'
                }

            ];
            $scope.secondaryMockFunction = function() {};
        }));

        describe('primaryInfo processing', function() {
            it('applies a currency filter to primaryInfo when the property currency is set (EUR)', function() {
                // use object 0 in the $scope.list array
                var anElement = angular.element('<aab-tile name="list[0].accountHolderName" primary-info="list[0].currentBalance" ' +
                    'currency="list[0].currency" additional-info="list[0].externalName" additional-info-extra="list[0].ibanNumber"></aab-tile>');
                anElement = $compile(anElement)($scope);
                $scope.$digest();
                expect(anElement.html()).toContain('€');
            });

            it('applies a currency filter to primaryInfo when the property currency is set (USD)', function() {
                // use object 1 in the $scope.list array
                var anElement = angular.element('<aab-tile primary-info="list[1].currentBalance" display-mode="compact" ' +
                    'currency="list[1].currency"></aab-tile>');
                anElement = $compile(anElement)($scope);
                $scope.$digest();

                expect(anElement.html()).toContain('USD');
            });

            it('keeps the primaryInfo as it is when currency is not a property of the ngModel', function() {
                // use object 1 in the $scope.list array
                var anElement = angular.element('<aab-tile primary-info="list[1].currentBalance"></aab-tile>');
                anElement = $compile(anElement)($scope);
                $scope.$digest();
                expect(anElement.html()).not.toContain('USD');
            });

            it('applies the proper class when icon attribute is specified', function() {
                element = angular.element('<aab-tile ng-model="model" name="list[0].accountHolderName" display-mode="oneline" ' +
                    'primary-info="list[0].currentBalance" icon="{{list[1].icon}}"></aab-tile>');
                element = $compile(element)($scope);
                $scope.$digest();
                expect(
                angular.element(element)[0].querySelectorAll('.glyphicon.ocf-contract-type-insurance').length
                ).toBe(
                    1
                );
            });

            it('applies the proper class when primary-info-icon attribute is specified', function() {
                element = angular.element('<aab-tile ng-model="model" display-mode="oneline" primary-info-icon="list[5].primaryInfoIcon"></aab-tile>');
                element = $compile(element)($scope);
                $scope.$digest();
                expect(
                angular.element(element)[0].querySelectorAll('.ocf-tile-primary-info-icon.glyphicon.glyphicon-warning-sign').length
                ).toBe(
                    1
                );
            });
            it('transcluded area should not be clickable', function() {
                element = angular.element('<aab-tile ng-model="model" display-mode="oneline" primary-info-icon="list[5].primaryInfoIcon"><p id="transcluded">I am transcluded!</p></aab-tile>');
                element = $compile(element)($scope);
                $scope.$digest();
                var event = {
                    type: 'click',
                    stopPropagation: function() {}
                };

                var spy = spyOn(event, 'stopPropagation');
                var isoScope = element.isolateScope();

                isoScope.ignoreClick(event);
                expect(spy).toHaveBeenCalled();
            });

            it('should apply a class \'ocf-tile-unread-notification\' when tile is unread', function() {
                var anElement = angular.element('<aab-tile ng-model="model" primary-info="list[1].currentBalance" ' +
                    'currency="list[1].currency" unread-tile="{{list[1].unreadTile}}"></aab-tile>');
                anElement = $compile(anElement)($scope);
                $scope.$digest();
                expect(
                 angular.element(anElement)[0].classList
                ).toContain(
                    'ocf-tile-unread-notification'
                );
            });

            it('applies the URL of logo when logo attribute is specified', function() {
                element = angular.element('<aab-tile ng-model="model" name="list[0].accountHolderName" display-mode="oneline" ' +
                    'primary-info="list[0].currentBalance" logo="list[0].logo" secondary-action-indicator=""></aab-tile>');
                element = $compile(element)($scope);
                $scope.$digest();
                expect(element.html()).toContain('./images/responsive-image-landscape2.png');
            });


            it('should apply the proper class for secondary action indicator', function() {
                element = angular.element('<aab-tile ng-model="model" name="list[0].accountHolderName" display-mode="oneline" ' +
                    'primary-info="list[0].currentBalance" secondary-action-indicator="{{list[0].secondaryActionIndicator}}"></aab-tile>');
                element = $compile(element)($scope);
                $scope.$digest();
                expect(
                angular.element(element)[0].querySelectorAll('.glyphicon.ocf-icon-edentifier2-cosigner').length
                ).toBe(
                    1
                );
            });

            it('should apply the proper class for secondary action indicator, when icon is positive', function() {
                element = angular.element('<aab-tile ng-model="model" name="list[4].accountHolderName" display-mode="oneline" ' +
                    'primary-info="list[4].currentBalance" secondary-action-indicator="{{list[4].secondaryActionIndicator}}"></aab-tile>');
                element = $compile(element)($scope);
                $scope.$digest();
                expect(
                angular.element(element)[0].querySelectorAll('.ocf-icon-positive').length
                ).toBe(
                    1
                );
            });
            it('should apply the proper class for secondary action indicator, when icon is inProgressState', function() {
                element = angular.element('<aab-tile ng-model="model" name="list[8].accountHolderName" display-mode="oneline" ' +
                    'primary-info="list[8].currentBalance" secondary-action-indicator="{{list[8].secondaryActionIndicator}}"></aab-tile>');
                element = $compile(element)($scope);
                $scope.$digest();
                expect(
                angular.element(element)[0].querySelectorAll('.ocf-icon-in-progress-state').length
                ).toBe(
                    1
                );
            });

            it('should apply a class \'ocf-tile-action-icon-separator\' when the secondary-action is defined', function() {
                element = angular.element('<aab-tile ng-model="model" name="list[0].accountHolderName" display-mode="oneline" ' +
                    'primary-info="list[0].currentBalance" secondary-action-indicator="{{list[0].secondaryActionIndicator}}" ' +
                    'secondary-action="$scope.secondaryMockFunction()"></aab-tile>');
                element = $compile(element)($scope);
                $scope.$digest();
                expect(element.isolateScope().showTileIconSeperatorClass).toContain('ocf-tile-action-icon-separator');
            });

            it('should prevent click propagation for secondary action because parant could allso be clickable', function() {
                element = angular.element('<aab-tile ng-model="model" name="list[0].accountHolderName" display-mode="oneline" ' +
                    'primary-info="list[0].currentBalance" secondary-action-indicator="{{list[0].secondaryActionIndicator}}" ' +
                    'secondary-action="$scope.secondaryMockFunction()"></aab-tile>');
                var compiledelement = $compile(element)($scope);
                $scope.$digest();

                var event = {
                    type: 'click',
                    stopPropagation: function() {}
                };
                var spy = spyOn(event, 'stopPropagation');
                angular.element(compiledelement).find('.ocf-tile-action-icon').triggerHandler(event);
                expect(spy).toHaveBeenCalled();
            });
            it('should apply a class \'ocf-tile-name-only\' when the display-mode is defined as \'nameOnly\'', function() {
                element = angular.element('<aab-tile ng-model="model" name="list[0].accountHolderName" display-mode="nameOnly" ' +
                    'primary-info="list[0].currentBalance" secondary-action-indicator="{{list[0].secondaryActionIndicator}}" ' +
                    'secondary-action="$scope.secondaryMockFunction()"></aab-tile>');
                element = $compile(element)($scope);
                $scope.$digest();
                expect(
                angular.element(element)[0].classList
                ).toContain(
                    'ocf-tile-name-only'
                );
            });

            it('Primary info is a text, it should be translated', function() {
                var anElement = angular.element('<aab-tile name="list[3].accountHolderName" primary-info="list[3].currentBalance" ></aab-tile>');
                anElement = $compile(anElement)($scope);
                $scope.$digest();
                expect(anElement.html()).toContain('Your account has been cancelled');
            });

            it('should apply the proper secondaryActionIndicator class', function() {
                element = angular.element('<aab-tile ng-model="model" name="list[0].accountHolderName" display-mode="oneline" ' +
                    'primary-info="list[0].currentBalance" secondary-action-indicator="{{list[0].secondaryActionIndicator}}"></aab-tile>');
                element = $compile(element)($scope);
                $scope.$digest();
                expect(element.isolateScope().secondaryActionPresent).toBe(true);
                expect(element.isolateScope().secondaryActionIndicatorClass).toBe('ocf-icon-edentifier2-cosigner');
            });

            it('should set the secondary action present to false when secondary-action not defined', function() {
                element = angular.element('<aab-tile ng-model="model" name="list[0].accountHolderName" display-mode="oneline" ' +
                    'primary-info="list[0].currentBalance" secondary-action-indicator=" "></aab-tile>');
                element = $compile(element)($scope);
                $scope.$digest();
                expect(element.isolateScope().secondaryActionPresent).toBe(false);
            });
            it('should set the logo class to glyphicon ocf-contract-type-general when logo is set to default', function() {
                element = angular.element('<aab-tile ng-model="model" name="list[0].accountHolderName" primary-info="list[0].currentBalance" ' +
                    'logo="default" secondary-action-indicator=""></aab-tile>');
                element = $compile(element)($scope);
                $scope.$digest();
                expect(element.isolateScope().logoClass).toContain('glyphicon ocf-contract-type-general');
            });

            it('should call the default action when secondary-action is not present', function() {
                element = angular.element('<aab-tile ng-model="model" name="list[0].accountHolderName" display-mode="oneline" ' +
                    'primary-info="list[0].currentBalance" secondary-action-indicator="{{list[0].secondaryActionIndicator}}" ' +
                    'default-action="$scope.defaultMockFunction()"></aab-tile>');
                var compiledelement = $compile(element)($scope);
                $scope.$digest();
                var event = {
                    type: 'click',
                    stopPropagation: function() {}
                };
                var spy = spyOn(element.isolateScope(), 'defaultAction');
                angular.element(compiledelement).find('.ocf-tile-action-icon').triggerHandler(event);
                expect(spy).toHaveBeenCalled();
            });
            it('should set the tabindex to -1 when status is disabled or readonly or secondaryonly', function() {
                element = angular.element('<aab-tile ng-model="model" status="secondaryonly" name="list[0].accountHolderName" ' +
                    'primary-info="list[0].currentBalance"></aab-tile>');
                element = $compile(element)($scope);
                $scope.$digest();
                expect(element.isolateScope().aabTileController.tabindex).toBe(-1);
            });
            it('should set the tabindex to 0 when status is anything disabled or readonly or secondaryonly', function() {
                element = angular.element('<aab-tile ng-model="model" status="interactive" name="list[0].accountHolderName" ' +
                    'primary-info="list[0].currentBalance"></aab-tile>');
                element = $compile(element)($scope);
                $scope.$digest();
                expect(element.isolateScope().aabTileController.tabindex).toBe(0);
            });
            it('should set the secondary tab index to -1 when status is disabled or readonly', function() {
                element = angular.element('<aab-tile ng-model="model" status="readonly" name="list[0].accountHolderName" ' +
                    'primary-info="list[0].currentBalance"></aab-tile>');
                element = $compile(element)($scope);
                $scope.$digest();
                expect(element.isolateScope().aabTileController.tabindexSecondaryAction).toBe(-1);
            });
            it('should set the secondary tab index to 0 when status is anything disabled or readonly', function() {
                element = angular.element('<aab-tile ng-model="model" status="interactive" name="list[0].accountHolderName" ' +
                    'primary-info="list[0].currentBalance"></aab-tile>');
                element = $compile(element)($scope);
                $scope.$digest();
                expect(element.isolateScope().aabTileController.tabindexSecondaryAction).toBe(0);
            });

            it('applies the proper class when inLineIcon attribute is specified', function() {
                element = angular.element('<aab-tile ng-model="model" name="list[6].accountHolderName" display-mode="compact" ' +
                    'primary-info="list[0].currentBalance" in-line-icon="{{list[6].inLineIcon}}"></aab-tile>');
                element = $compile(element)($scope);
                $scope.$digest();
                expect(
                angular.element(element)[0].querySelectorAll('.ocf-contract-type-payment').length
                ).toBe(
                    1
                );
            });

            it('applies the URL of inLineLogo when inLineLogo attribute is specified', function() {
                element = angular.element('<aab-tile ng-model="model" name="list[7].accountHolderName" display-mode="compact" ' +
                    'primary-info="list[7].currentBalance" in-line-logo="list[7].inLineLogo"></aab-tile>');
                element = $compile(element)($scope);
                $scope.$digest();
                expect(element.html()).toContain('./images/responsive-image-landscape2.png');
            });

        });

        describe('binding with aabTileDropDownController', function() {
            beforeEach(function() {
                // mock the required parent controller
                aabTileDropdownControllerMock = {
                    registerItem: function() {
                        return;
                    },
                    selectItem: function() {
                        return;
                    }
                };
                spyOn(aabTileDropdownControllerMock, 'registerItem');
                spyOn(aabTileDropdownControllerMock, 'selectItem');

                aabTileDropdown = angular.element('<aab-tile-dropdown></aab-tile-dropdown>');
                aabTileDropdown.data('$aabTileDropdownController', aabTileDropdownControllerMock);
            });

            it('registers with dropdowncontroller when part of aab-tile-dropdown', function() {
                element = angular.element('<aab-tile ng-model="model" status="readonly" name="list[0].accountHolderName" ' +
                    'primary-info="list[0].currentBalance" currency="list[0].currency" additional-info="list[0].externalName" ' +
                    'additional-info-extra="list[0].ibanNumber"></aab-tile>');
                aabTileDropdown.append(element);
                element = $compile(element)($scope);
                $scope.$digest();
                $timeout.flush();
                expect(aabTileDropdownControllerMock.registerItem).toHaveBeenCalled();
            });

            it('binds a click event to the Tile element when it is not readonly', function() {
                element = angular.element('<aab-tile ng-model="model" name="list[0].accountHolderName" primary-info="list[0].currentBalance"></aab-tile>');
                aabTileDropdown.append(element);
                element = $compile(element)($scope);

                $scope.$digest();

                $timeout.flush();

                element.triggerHandler('click');

                $scope.$digest();

                expect(aabTileDropdownControllerMock.selectItem).toHaveBeenCalled();
            });

            it('does not bind a click event to the Tile element when it is readonly', function() {
                $scope.readonly = true;

                element = angular.element('<aab-tile ng-model="model" status="readonly" name="list[0].accountHolderName" ' +
                    'primary-info="list[0].currentBalance"></aab-tile>');
                aabTileDropdown.append(element);
                element = $compile(element)($scope);

                $scope.$digest();

                $timeout.flush();

                element.triggerHandler('click');

                $scope.$digest();

                expect(aabTileDropdownControllerMock.selectItem).not.toHaveBeenCalled();
            });

            it('does not bind a click event to the Tile element when it is disabled', function() {
                $scope.disabled = true;

                element = angular.element('<aab-tile ng-model="model" status="disabled" name="list[0].accountHolderName" ' +
                    'primary-info="list[0].currentBalance"></aab-tile>');
                aabTileDropdown.append(element);
                element = $compile(element)($scope);

                $scope.$digest();

                element.triggerHandler('click');

                $scope.$digest();

                expect(aabTileDropdownControllerMock.selectItem).not.toHaveBeenCalled();
            });
            it('does not bind a click event to the Tile element when it is secondaryonly', function() {
                $scope.disabled = true;
                element = angular.element('<aab-tile ng-model="model" status="secondaryonly" name="list[0].accountHolderName" ' +
                    'primary-info="list[0].currentBalance"></aab-tile>');
                aabTileDropdown.append(element);
                element = $compile(element)($scope);

                $scope.$digest();

                element.triggerHandler('click');

                $scope.$digest();

                expect(aabTileDropdownControllerMock.selectItem).not.toHaveBeenCalled();
            });
        });
    });
});
