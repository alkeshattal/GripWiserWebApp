//FIXED: fix memoryleaks by cleaning up this file

/**
 * @description
 * Unit test for aabAccordionItem
 */
 /* globals define describe beforeEach module inject expect it*/
define([
    'angular',
    'angular-mocks',
    'component/ui/aab-accordion-item/aab-accordion-item'],

     function(angular) {
         'use strict';

        describe('ui.aabAccordionItem [component/ui/aab-accordion-item/aab-accordion-item]', function() {
            beforeEach(module('ui.aabAccordionItem', 'oca.templates', 'pascalprecht.translate', function($provide, $translateProvider) {
                $translateProvider
                    .registerAvailableLanguageKeys(['en', 'en_EN', 'de', 'de_DE'], {
                        en_US: 'en_EN'
                    })
                    .translations('en', {
                        'my-paragraph-translation-key': 'Translated key'
                    })
                    .preferredLanguage('en');
            }));

            beforeEach(inject(function(_$rootScope_, _$compile_) {
                this.$compile = _$compile_;
                this.$scope = _$rootScope_.$new();
            }));

            afterEach(function() {
                this.element.remove();
            });

            it('should transclude its contents', function() {
                this.element = angular.element('<aab-accordion-item title="a title"><p>Some content</p></aab-accordion-item>');
                this.element = this.$compile(this.element)(this.$scope);
                this.$scope.$apply();
                expect(this.element.find('p').length).toBe(1);
                expect(this.element.find('p').text()).toContain('Some content');
            });

            it('should use the given title', function() {
                this.element = angular.element('<aab-accordion-item title="a title"><p>Some content</p></aab-accordion-item>');
                this.element = this.$compile(this.element)(this.$scope);
                this.$scope.$apply();
                expect(this.element.find('uib-accordion-heading span:not(.glyphicon)').length).toBe(1);
                expect(this.element.find('uib-accordion-heading span:not(.glyphicon)').text()).toContain('a title');
            });

            it('should expand when expand == true', function() {
                this.$scope.expand = true;
                this.element = angular.element('<aab-accordion-item title="a title" expand="expand"><p>Some content</p></aab-accordion-item>');
                this.element = this.$compile(this.element)(this.$scope);
                this.$scope.$apply();

                expect(this.element.isolateScope().expand).toBe(true);
                expect(this.element.find('.ocf-icon-accordion-closed').length).toBe(0);
                expect(this.element.find('.ocf-icon-accordion-opened').length).toBe(1);
            });

            it('should not expand when expand == false', function() {
                this.$scope.expand = false;
                this.element = angular.element('<aab-accordion-item title="a title" expand="expand"><p>Some content</p></aab-accordion-item>');
                this.element = this.$compile(this.element)(this.$scope);
                this.$scope.$apply();

                expect(this.element.isolateScope().expand).toBe(false);
                expect(this.element.find('.ocf-icon-accordion-closed').length).toBe(1);
                expect(this.element.find('.ocf-icon-accordion-opened').length).toBe(0);
            });

            it('should not expand when expand is not set', function() {
                this.element = angular.element('<aab-accordion-item title="a title"><p>Some content</p></aab-accordion-item>');
                this.element = this.$compile(this.element)(this.$scope);
                this.$scope.$apply();

                expect(this.element.isolateScope().expand).toBe(false);
                expect(this.element.find('.ocf-icon-accordion-closed').length).toBe(1);
                expect(this.element.find('.ocf-icon-accordion-opened').length).toBe(0);
            });
        });
     }
);
