//FIXED: fix memoryleaks by cleaning up this file

/**
 * @description
 * Unit test for AabTileExpandable
 */
/* globals define describe beforeEach module inject expect it*/
define(['angular', 'angular-mocks', 'component/ui/aab-tile-expandable/aab-tile-expandable'], function(angular) {
    'use strict';

    describe('Unit testing AabTileExpandable', function() {
        beforeEach(function(){
            angular.mock.module(function($provide) {
                $provide.constant('ICON_CLASSES_ACTIONS', {
                    delete: 'glyphicon-trash',
                    information: 'glyphicon-info-sign',
                    stepUp: 'ocf-icon-edentifier2',
                    cosign: 'ocf-icon-cosign',
                    stepUpCosign: 'ocf-icon-edentifier2-cosigner',
                    dropdown: 'ocf-icon-down',
                    drag: 'glyphicon-move',
                    navigate: 'glyphicon-chevron-right'
                });

                $provide.value('translateFilter', function(value) {
                    return value;
                });
            });

            angular.mock.module('ui.aabTileExpandable', 'oca.templates');
        });

        afterEach(function( ){
            if (this.element) {
                this.element.remove();
            }
        });

        beforeEach(inject(function(_$rootScope_, _$compile_) {
            // The injector unwraps the underscores (_) from around the parameter names when matching
            this.$compile = _$compile_;
            this.$scope = _$rootScope_.$new();

            this.$scope.expandableTile = {
                name: 'Expandable tile compact',
                primaryInfo: 888.88,
                additionalInfo: 'some line',
                additionalInfoExtra: 'NL02 ABNA 9876 5432 10'
            };
        }));

        it('should transclude its content', function() {
            this.$scope.isCollapsed = false;
            this.element = angular.element('<aab-tile-expandable data-is-collapsed="isCollapsed" data-primary-info="expandableTile.primaryInfo" data-tile-name="{{expandableTile.name}}" data-additional-info="expandableTile.additionalInfo" data-additional-info-extra="expandableTile.additionalInfoExtra"><p>I am transcluded!</p></aab-tile-expandable>');
            this.$compile(this.element)(this.$scope);
            this.$scope.$digest();
            expect(this.element.html()).toContain('I am transcluded');
        });

        it('should set the isCollapsed property to true when isCollapsed property is not defined', function() {
            this.element = angular.element('<aab-tile-expandable data-primary-info="expandableTile.primaryInfo" data-tile-name="{{expandableTile.name}}"><p>Hello World</p></aab-tile-expandable>');
            this.element = this.$compile(this.element)(this.$scope);
            this.$scope.$digest();
            var isoScope = this.element.isolateScope();
            expect(isoScope.isCollapsed).toBeTruthy();
        });

        it('should not expand when there is clicked inside the transcluded area', function() {
            this.element = angular.element('<aab-tile-expandable data-primary-info="expandableTile.primaryInfo" data-tile-name="{{expandableTile.name}}" data-additional-info="expandableTile.additionalInfo" data-additional-info-extra="expandableTile.additionalInfoExtra"><p id="transcluded">I am transcluded!</p></aab-tile-expandable>');
            this.element = this.$compile(this.element)(this.$scope);
            this.$scope.$digest();

            var event = {
                type: 'click',
                stopPropagation: function() {}
            };

            var spy = spyOn(event, 'stopPropagation');
            var isoScope = this.element.isolateScope();

            isoScope.ignoreClick(event);

            expect(spy).toHaveBeenCalled();
            expect(isoScope.isCollapsed).toBe(true);
        });

        it('should add passed classes to template html and contain half-gutter class if attribute value is present', function(){
            this.element = angular.element('<aab-tile-expandable data-primary-info="expandableTile.primaryInfo" data-tile-name="{{expandableTile.name}}"' +
                'data-half-gutter="true" data-primary-info-classes="strong positive" data-tile-name-classes="tile-name" data-logo-classes="logo-class"><p id="transcluded">I am transcluded!</p></aab-tile-expandable>');
            this.element = this.$compile(this.element)(this.$scope);
            this.$scope.$digest();
            expect(this.element[0].getElementsByClassName('half-gutter').length).toBe(1);
            expect(this.element[0].getElementsByClassName('strong positive').length).toBe(1);
            expect(this.element[0].getElementsByClassName('tile-name').length).toBe(1);
            expect(this.element[0].getElementsByClassName('logo-class').length).toBe(1);
        });

        it('should not contain half-gutter class if attribute value is not present', function(){
            this.element = angular.element('<aab-tile-expandable data-primary-info="expandableTile.primaryInfo" data-tile-name="{{expandableTile.name}}"'+
                '><p id="transcluded">I am transcluded!</p></aab-tile-expandable>');
            this.element = this.$compile(this.element)(this.$scope);
            this.$scope.$digest();
            expect(this.element[0].getElementsByClassName('half-gutter').length).toBe(0);
        });
    });
});
