/**
 * @description
 * Unit test for aab-accordion-two
 */

/* globals define describe beforeEach module inject expect it*/
define(['angular',
    'angular-mocks',
    'component/ui/aab-accordion-two/aab-accordion-two'],

    function(angular) {
        'use strict';

        describe('Unit testing aab-accordion-two', function() {
            beforeEach(module('ui.aabAccordionTwo', 'oca.templates'));
            beforeEach(inject(function(_$rootScope_, _$compile_) {
                this.$compile = _$compile_;
                this.$scope = _$rootScope_.$new();
                this.$parentScope = _$rootScope_.$new();
            }));

            afterEach(function() {
                if (this.element) {
                    this.element.remove();
                }
            });

            it('should transclude contents of the transclude-slots', function() {
                this.element = angular.element('<aab-accordion-two><accordion-left-area>Transcluded title</accordion-left-area></aab-accordion-two>');
                this.node = this.$compile(this.element)(this.$scope);
                this.$scope.$digest();
                expect(this.element.html()).toContain('Transcluded title');
            });

            it('should set the isAccordionOpen property to true if is-accordion-open attribute is set to true', function() {
                this.element = angular.element('<aab-accordion-two data-is-accordion-open="true"></aab-accordion-two>');
                this.$compile(this.element)(this.$scope);
                this.$scope.$digest();
                this.isoScope = this.element.isolateScope();
                expect(this.isoScope.isAccordionOpen).toBeTruthy();
            });

            it('should show a chevron on the right if is-chevron-right equals to true', function() {
                this.element = angular.element('<aab-accordion-two data-is-chevron-right="true"></aab-accordion-two>');
                this.$compile(this.element)(this.$scope);
                this.$scope.$digest();
                expect(this.element[0].getElementsByClassName('glyphicon ocf-icon-chevron-down').length).toBe(1);
            });

            it('should show a chevron on the left on default and when is-chevron-right is false', function() {
                this.element = angular.element('<aab-accordion-two></aab-accordion-two>');
                this.$compile(this.element)(this.$scope);
                this.$scope.$digest();
                expect(this.element[0].getElementsByClassName('glyphicon ocf-icon-chevron-right').length).toBe(1);
            });
        });
    }
);
