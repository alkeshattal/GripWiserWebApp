/* global browser page */
//  aab-accordion-two
describe('ui-component/aab-accordion-two', function() {
    'use strict';

    beforeEach(function() {
        browser.get('/ui-components/aab-accordion-two/aab-accordion-two');
    });

    it('checkbox is available', function() {
       expect(page.styleguide.aabAccordionTwo.checkBox.isDisplayed()).toBeTruthy();
    });

    it('accordion with left chevron', function() {
       expect(page.styleguide.aabAccordionTwo.accordianLeftClosedChevron.isDisplayed()).toBeTruthy();
    });

    it('accordian with an icon left', function() {
        expect(page.styleguide.aabAccordionTwo.accordionLeftIcon.isDisplayed()).toBeTruthy();
    });

    it('accordian with area left', function() {
       expect(page.styleguide.aabAccordionTwo.accordianLeftArea.isDisplayed()).toBeTruthy();
    });

    it('accordian with right area', function() {
       expect(page.styleguide.aabAccordionTwo.accordianRightArea.isDisplayed()).toBeTruthy();
    });

    it('accordion with success icon', function() {
       expect(page.styleguide.aabAccordionTwo.accordianWithSuccess.isDisplayed()).toBeTruthy();
    });

    it('one accordian is open by default', function() {
        expect(page.styleguide.aabAccordionTwo.accordianLeftOpenedChevron.isDisplayed()).toBeTruthy();
    });

    it('right chvron is available', function() {
        expect(page.styleguide.aabAccordionTwo.accordianFirstRightClosedChevron.isDisplayed()).toBeTruthy();
    });

    it('expand accordion and check expected behaviour', function() {
        page.styleguide.aabAccordionTwo.accordianLeftClosedChevron.click();
        expect(page.styleguide.aabAccordionTwo.accordianLeftOpenedChevron.isDisplayed()).toBeTruthy();
    });

    it('click on primary button and check expected behaviour', function() {
        page.styleguide.aabAccordionTwo.accordianLeftClosedChevron.click();
        page.styleguide.aabAccordionTwo.accordianButton.click();
        expect(page.styleguide.aabAccordionTwo.accordionButtonClickedText.getText()).toEqual('Transcluded button clicked: [Clicked Transcluded Button function]');
    });

    it('Only one accordean is expanded at one time', function() {
        page.styleguide.aabAccordionTwo.accordianFirstRightClosedChevron.click();
        page.styleguide.aabAccordionTwo.accordianSecondRightClosedChevron.click();
        expect(page.styleguide.aabAccordionTwo.accordianFirstRightClosedChevron.isDisplayed()).toBeTruthy(); 
    }); 

    it('Possible to open more than one accordian at one time', function() {
        page.styleguide.aabAccordionTwo.checkBox.click();
        page.styleguide.aabAccordionTwo.accordianFirstRightClosedChevron.click();
        page.styleguide.aabAccordionTwo.accordianSecondRightClosedChevron.click();
        expect(page.styleguide.aabAccordionTwo.accordianSecondRightOpenedChevron.isDisplayed()).toBeTruthy();
        expect(page.styleguide.aabAccordionTwo.accordianFirstRightOpenedChevron.isDisplayed()).toBeTruthy(); 
    });

    // Accessibility Tests
    it('expand accordian and check expected behaviour by accessibilty', function() {
        browser.waitForAngular();
        browser.actions().sendKeys(protractor.Key.TAB).perform();
        browser.actions().sendKeys(protractor.Key.TAB).perform();
        browser.actions().sendKeys(protractor.Key.ENTER).perform();
        browser.actions().sendKeys(protractor.Key.TAB).perform();
        browser.actions().sendKeys(protractor.Key.TAB).perform();
        browser.actions().sendKeys(protractor.Key.ENTER).perform();
        expect(page.styleguide.aabAccordionTwo.accordionButtonClickedText.getText()).toEqual('Transcluded button clicked: [Clicked Transcluded Button function]');
        browser.actions().sendKeys(protractor.Key.TAB).perform();
    });
 });