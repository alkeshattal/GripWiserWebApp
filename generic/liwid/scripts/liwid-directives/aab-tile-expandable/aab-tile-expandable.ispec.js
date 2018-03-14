/* globals describe beforeEach it browser*/
// protractor test aab-tile-expandable

describe('ui-component/aab-tile-expandable', function() {
    'use strict';

    beforeEach(function() {
        browser.get('/ui-components/aab-tile-expandable/aab-tile-expandable');
    });

    it('The font-size of the name should be 16px (h5)', function() {
        var headerSize = page.styleguide.aabTileExpandableName.getCssValue('font-size');
        expect(headerSize).toContain('16px');
    });

    it('The font-size of the primary info should be 16px (h5)', function() {
        var headerSize = page.styleguide.aabTileExpandablePrimaryInfo.getCssValue('font-size');
        expect(headerSize).toContain('16px');
    });

    it('Ensure that in the transclude area there are paragarph, buttons etc', function() {
        expect(page.styleguide.aabTileExpandableButton).toBeDefined();
        expect(page.styleguide.aabTileExpandableParagraph).toBeDefined();
    });

    it('buttons can be clickable and values posted in form.', function() {
        var EC = protractor.ExpectedConditions;
        page.styleguide.aabTileExpandable.click();
        browser.wait(EC.visibilityOf(page.styleguide.aabTileExpandableButton), DEFAULT_WAIT_TIMEOUT);
        page.styleguide.aabTileExpandableButton.click();
        expect(page.styleguide.aabTileExpandableDisplay.getText()).toEqual('Is the button clicked? Button clicked');
    });

    it('Ensure that expandable and selectable tile has checkbox and toggles details on click', function() {
        expect(page.styleguide.aabTileExpandableSelectableCheckbox.isDisplayed()).toBeTruthy();
        page.styleguide.aabTileExpandableSelectableCheckbox.click();
        expect(page.styleguide.aabTileExpandableDisplay.getText()).toEqual('Is the button clicked? Checkbox clicked');
        expect(page.styleguide.aabTileExpandableSelectableContainer.isPresent()).toBeFalsy();
        page.styleguide.aabTileExpandableSelectable.click();
        expect(page.styleguide.aabTileExpandableSelectableContainer.isDisplayed()).toBeTruthy();
    });

    it('Ensure that the icon is displayed on right bottom corner of the selectable tile', function() {
        expect(page.styleguide.aabTileExpandableSelectableIcon.isDisplayed()).toBeTruthy();
    });

    it('Ensure that the marked tile has notification classes', function() {
        page.styleguide.aabTileExpandableMarked.getAttribute('class').then(function(attr) {
            expect(attr).toContain('ocf-tile-notification-alert');
        });
    });
});