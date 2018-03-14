/* global browser page */
// protractor test aab-tile
describe('ui-component/aab-tile', function() {
    'use strict';

    describe('The aab-tile interactive', function() {
        beforeEach(function() {
            browser.get('/ui-components/aab-tile/aab-tile');
        });

        it('should be clickable', function() {
            page.styleguide.aabTileInteractive.click();
            expect(page.styleguide.aabTileListSelectedDisplay.getText()).toEqual('Selected action: [My First Tile Interactive-Default action]');
        });

        it('should have a logo', function() {
            expect(page.styleguide.aabTileInteractiveLogo).toBeDefined();
        });

        it('should have a logo of 46px by 46px', function() {
            var logoHeight = page.styleguide.aabTileInteractiveLogo.getCssValue('height');
            var logoWidth = page.styleguide.aabTileInteractiveLogo.getCssValue('width');
            expect(logoHeight).toContain('46px');
            expect(logoWidth).toContain('46px');
        });


        it('The font-size of the tile header should be 16px (h5)', function() {
            var headerSize = page.styleguide.aabTileInteractiveHeader.getCssValue('font-size');
            expect(headerSize).toContain('16px');
        });

        it('The font-size of the tile amount should be 16px (h5)', function() {
            var amountSize = page.styleguide.aabTileInteractiveAmount.getCssValue('font-size');
            expect(amountSize).toContain('16px');
        });

        it('The font-size of the additional info should be 12px', function() {
            var additionalInfoSize = page.styleguide.aabTileInteractiveAdditionalInfo.getCssValue('font-size');
            expect(additionalInfoSize).toContain('12px');
        });

        it('Ensure that in the transclude area there are paragarph, buttons etc', function() {
        expect(page.styleguide.aabTileButtonTransclude).toBeDefined();
        expect(page.styleguide.aabTile.tileParagraphText).toBeDefined();
        });

        it('Transcluded buttons can be clickable and values should be display ', function() {
        page.styleguide.aabTileButtonTransclude.click();
        expect(page.styleguide.aabTileDataDisplayButtonClick.getText()).toEqual('Selected action [Button clicked]');
        });
    });

    describe('The aab-tile read-only', function() {

        beforeEach(function() {
            browser.get('/ui-components/aab-tile/aab-tile');
        });

        it('should not be clickable', function() {
            page.styleguide.aabTileReadOnly.click();
            expect(page.styleguide.aabTileListSelectedDisplay.getText()).toEqual('Selected action: []');
        });
    });

    describe('The aab-tile with secondary indicator and action', function() {

        beforeEach(function() {
            browser.get('/ui-components/aab-tile/aab-tile');
        });

        it('should trigger the default action when clicking the tile', function() {
            page.styleguide.aabTileWithSecondaryAction.click();
            expect(page.styleguide.aabTileList1SelectedDisplay.getText()).toEqual('Selected action:[Tile default action (positive)]');
        });

        it('should trigger the secondary action when clicking the secondary indicator', function() {
            page.styleguide.aabTileSecondaryIndicator.click();
            expect(page.styleguide.aabTileList1SelectedDisplay.getText()).toEqual('Selected action:[Tile secondary action (positive)]');
        });
    });

    describe('The aab-tile with secondary only action', function() {
        'use strict';

        beforeEach(function() {
            browser.get('/ui-components/aab-tile/aab-tile');
        });

        it('should not trigger the default action when clicking the tile', function() {
            page.styleguide.aabTileWithSecondaryActionOnly.click();
            expect(page.styleguide.aabTileList1SelectedDisplay.getText()).toEqual('Selected action:[]');
        });

        it('should trigger the secondary action when clicking the secondary indicator', function() {
            page.styleguide.aabTileSecondaryIndicatorOnly.click();
            expect(page.styleguide.aabTileList1SelectedDisplay.getText()).toEqual('Selected action:[Tile secondary action (information)]');
        });
    });

    describe('The compact tile', function() {
        'use strict';

        beforeEach(function() {
            browser.get('/ui-components/aab-tile/aab-tile');
        });

        it('should show the tile with additional info, additional info extra and moreInfoInAdditionalField', function() {
            expect(page.styleguide.moreInfoInAdditionalField.getText()).toEqual('NL02 ABNA 9876 5432 10 | some line | 1486');
        });

        it('should trigger the default action when click on compact tile', function() {
            page.styleguide.compactTileInLineLogo.click();
            expect(page.styleguide.aabTileList1SelectedDisplay.getText()).toEqual('Selected action:[Compact tile (secondary indicator only) default action]');
        });

        it('should show the inLineLogo in tile', function() {
            expect(page.styleguide.aabCompactTileLogo).toBeDefined();
        });

        it('should have a inLineLogo of 22px by 22px', function() {
            var inLineLogoHeight = page.styleguide.aabCompactTileLogo.getCssValue('height');
            var inLineLogoWidth = page.styleguide.aabCompactTileLogo.getCssValue('width');
            expect(inLineLogoHeight).toContain('22px');
            expect(inLineLogoWidth).toContain('22px');
        });
    });

    describe('The Half tile', function() {

        beforeEach(function() {
            browser.get('/ui-components/aab-tile/aab-tile');
        });

        it('The half tile should be clickable', function() {
            page.styleguide.aabNameOnlyTileInteractive.click();
            expect(page.styleguide.aabhalfTileList1SelectedDisplay.getText()).toEqual('Selected action: [Half tile with name only]');
        });

        it('The half tile with name and logo - should have a logo', function() {
            expect(page.styleguide.aabHalfTilelogo).toBeDefined();
        });

        it('should have a logo of 24px by 24px', function() {
            var logoHeight = page.styleguide.aabHalfTilelogo.getCssValue('height');
            var logoWidth = page.styleguide.aabHalfTilelogo.getCssValue('width');
            expect(logoHeight).toContain('24px');
            expect(logoWidth).toContain('24px');
        });

        it('The font-size of the tile header should be 16px (h5)', function() {
            var headerSize = page.styleguide.aabHalfTileTileHeader.getCssValue('font-size');
            expect(headerSize).toContain('16px');
        });

        it('The tile shoud have a secondary action icon', function() {
            expect(page.styleguide.aabHalfTileSecondaryIcon).toBeDefined();
        });

        it('The size of the Secondary action icon 22px by 22px', function() {
            var IconHeight = page.styleguide.aabHalfTileSecondaryIcon.getCssValue('height');
            var IconWidth = page.styleguide.aabHalfTileSecondaryIcon.getCssValue('width');
            expect(IconHeight).toContain('22px');
            expect(IconWidth).toContain('22px');
        });
        it('should trigger the secondary action in half tile when clicking the secondary indicator', function() {
            page.styleguide.aabHalfTileSecondaryIcon.click();
            expect(page.styleguide.aabHalfTileSelectedDisplaySecondaryIcon.getText()).toEqual('Selected action: [Tile with name and icon secondary action (information)]');
        });
    });
});
